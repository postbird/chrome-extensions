const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
// const btn7 = document.querySelector('#btn7');
// const btn8 = document.querySelector('#btn8');
// const btn9 = document.querySelector('#btn9');


btn1.onclick = () => {
    const query = {
        text: ''
    };
    chrome.history.search(query, (res) => {
        const arr = res.slice(0,3).map((item) => {
            return item
        });
        console.log(arr);
        let htm = '';
        arr.forEach(element => {
            htm += `<p><a href="${element.url}">${element.url}<a/></p>`;
        });
        document.querySelector('#scroll').innerHTML = htm;
    })
};

btn2.onclick = () => {
    const details = {
        url: 'http://ptbird.cn'
    };
    chrome.history.getVisits(details, (res) => {
        const arr = res.slice(0,3).map((item) => {
            return item
        });
        let htm = '';
        arr.forEach(element => {
            htm += `<p>transition: ${element.transition}</p>`;
        });
        document.querySelector('#scroll').innerHTML = htm;
    })
};

btn3.onclick = () => {
    const details = {
        url: 'http://ptbird.cn/chrome_extensions_aaa_2-s_as'
    };
    chrome.history.addUrl(details, (res) => {
       console.log(res);
    })
};

btn4.onclick = () => {
    const details = {
        url: 'http://ptbird.cn/chrome_extensions_aaa_2-s_as'
    };
    chrome.history.deleteUrl(details, (res) => {
       console.log(res);
    })
};

btn5.onclick = () => {
    const startTime = Date.now() - 50000;
    const endTime = Date.now();
    const query = {
        startTime,
        endTime
    };
    chrome.history.deleteRange(query, (res) => {
       console.log(res);
    })
};

btn6.onclick = () => {
    chrome.history.deleteAll((res) => {
       console.log(res);
    })
};