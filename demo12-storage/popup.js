const button = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const button4 = document.querySelector('#btn4');
// const button5 = document.querySelector('#btn5');
const button6 = document.querySelector('#btn6');
const button7 = document.querySelector('#btn7');
const textarea = document.querySelector('#textarea');


button.onclick = () => {
    chrome.storage.sync.set({key: 'value11'}, () => {
        console.log('set successed!');
    });
}

button2.onclick = () => {
    chrome.storage.sync.get('key', (res) => {
        console.log(res);
    });
}

button3.onclick = () => {
    chrome.storage.local.set({key: "value local"}, function() {
        console.log('Value is set to value local');
    });

    chrome.storage.local.get(['key'], function(result) {
        console.log(result );
    });
}

// button5.onclick = () => {
//     console.log('00000');
//     chrome.storage.onChanged.addListener((changes, namespace) => {
//         console.log(changes);
//         console.log(namespace);
//     })
// }


button4.onclick = () => {
    const text = textarea.value;
    chrome.storage.local.set({'textValue': text}, function() {
        console.log('Value is ' + text);
    });
}

button6.onclick = () => {
    chrome.storage.local.remove('textValue', function() {
        console.log('remove ');
    });
}


button7.onclick = () => {
    chrome.storage.local.clear(function() {
        console.log('remove all');
    });
}
