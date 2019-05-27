const button = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');

button.onclick = () => {
    chrome.tabs.query({currentWindow: true, active : true}, (tabArr) => {
        const activeTab = tabArr[0];
        if (!activeTab) {
            console.log('没有拿到 tab')
        }
        chrome.pageAction.show(activeTab.id, () => {
            console.log('激活成功');
        });   
    })
}

button2.onclick = () => {
    chrome.tabs.query({currentWindow: true, active : true}, (tabArr) => {
        const activeTab = tabArr[0];
        if (!activeTab) {
            console.log('没有拿到 tab')
        }
        chrome.pageAction.hide(activeTab.id, () => {
            console.log('hide success');
        });   
    })
}

button3.onclick = () => {
    chrome.tabs.query({}, (tabArr) => {
        Array.isArray(tabArr) && tabArr.forEach((item ,index) => {
            chrome.pageAction.setTitle({
                tabId: item.id,
                title: `new pageAction title ---- ${index}`
            }, () => {
                console.log("setTitle Successed! tabId is: " + item.id)
            });
        })
    })
}