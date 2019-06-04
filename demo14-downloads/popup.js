const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');
// const btn6 = document.querySelector('#btn6');
// const btn7 = document.querySelector('#btn7');
// const btn8 = document.querySelector('#btn8');
// const btn9 = document.querySelector('#btn9');


btn1.onclick = () => {
    const url = document.querySelector('#url').value;
    const options = {
        url
    }
    chrome.downloads.download(options, (res) => {
        console.log(res);
    })
};


btn2.onclick = () => {
    const options = {
        finalUrlRegex: '.jpg$'
     }
    chrome.downloads.search(options, (res) => {
        console.log(res);
    })
};

btn3.onclick = () => {
    const url = document.querySelector('#url').value;
    const options = {
        url
    }
    chrome.downloads.download(options, (id) => {
        chrome.downloads.pause(id, (res) =>{
            console.log(res);
        });
    });
};