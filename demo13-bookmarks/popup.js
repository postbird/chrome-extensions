const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

let tree = {};

btn1.onclick = () => {
    chrome.bookmarks.getTree((res) => {
        tree = res;
        console.log(res);
    })
};

btn2.onclick = () => {
    chrome.bookmarks.getSubTree("5", (res) => {
        console.log(res);
    })
};

btn3.onclick = () => {
    chrome.bookmarks.get("5", (res) => {
        console.log(res);
    })
};

btn4.onclick = () => {
    chrome.bookmarks.getChildren("5", (res) => {
        console.log(res);
    })
};

btn5.onclick = () => {
    chrome.bookmarks.getRecent(5, (res) => {
        console.log(res);
    })
};

btn6.onclick = () => {
    const value = document.querySelector('#textarea').value;
    chrome.bookmarks.search(value, (res) => {
        console.log(res);
    })
};

btn7.onclick = () => {
    const title = document.querySelector('#title').value;
    const url = document.querySelector('#url').value;
    const obj = {
        parentId: '5',
        title,
        url,
    }
    chrome.bookmarks.create(obj, (res) => {
        console.log(res);
    })
};

btn8.onclick = () => {
    const dest = {
        parentId: '1'
    }
    chrome.bookmarks.move('48', dest, (res) => {
        console.log(res);
    })
};

btn9.onclick = () => {
    const title = document.querySelector('#titleUpdate').value;
    const url = document.querySelector('#urlUpdate').value;
    const obj = {
        title,
        url,
    }
    chrome.bookmarks.update('48', obj, (res) => {
        console.log(res);
    })
};