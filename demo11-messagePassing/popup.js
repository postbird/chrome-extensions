const button = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');

button.onclick

button.onclick = () => {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    //       console.log(response);
    //     });
    //   });
    chrome.runtime.sendMessage({ greeting: 'Hello' }, (response) => {
        console.log(response);
    });

}


button2.onclick = () => {
    const port = chrome.runtime.connect({ name: 'postbird' });
    port.postMessage({ name: 'ptbird' });
    port.onMessage.addListener((msg) => {
        console.log(msg);
        if (msg.question === "what's your name?") {
            port.postMessage({ answer: 'My name is postbird' });
        } else if (msg.question === 'How are you?') {
            port.postMessage({ answer: "I am fine, thank U!" });
        }
    });
    console.log('Successed!');
}