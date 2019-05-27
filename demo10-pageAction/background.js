
chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.query({currentWindow: true, active : true}, (tabArr) => {
        console.log(tabArr);
        const activeTab = tabArr[0];
        if (!activeTab) {
            console.log('没有拿到 tab')
        }
        chrome.pageAction.show(activeTab.id, () => {
            console.log('激活成功');
        });   
    })
});

