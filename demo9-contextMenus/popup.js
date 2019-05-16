const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const button4 = document.querySelector('#btn4');
const button5 = document.querySelector('#btn5');
const button6 = document.querySelector('#btn6');
const button7 = document.querySelector('#btn7');

button1.onclick = () => {
    const options = {
        type: 'normal',
        id: '1',
        title: 'demoMenu1',
        visible: true,
    }
    chrome.contextMenus.create(options, () => {
        alert(`Created Success, id:${options.id}`);
    });
}

button2.onclick = () => {
    const options = {
        type: 'normal',
        id: '1_2',
        title: 'sub normal menu',
        visible: true,
        checked: true,
        parentId: '1',
    }
    chrome.contextMenus.create(options, () => {
        alert(`Created Success, id:${options.id}`);
    });
}


button3.onclick = () => {
    const options = {
        type: 'checkbox',
        id: '1_3',
        title: 'checkbox menu',
        visible: true,
    }
    chrome.contextMenus.create(options, () => {
        alert(`Created Success, id:${options.id}`);
    });
}

button4.onclick = () => {
    const options = {
        type: 'radio',
        id: '1_4',
        title: 'radio menu',
        checked: true
    }
    chrome.contextMenus.create(options, () => {
        alert(`Created Success, id:${options.id}`);
    });
}

button5.onclick = () => {
    const options = {
        type: 'normal',
        contexts: ['link'],
        id: '1_5',
        title: 'menu on link',
    }
    chrome.contextMenus.create(options, () => {
        alert(`Created Success, id:${options.id}`);
    });
}

button6.onclick = () => {
    chrome.contextMenus.remove('1', () => {
        alert('removed')
    });
}

button7.onclick = () => {
    chrome.contextMenus.removeAll(() => {
        alert('removed')
    });
}

chrome.contextMenus.onClicked.addListener((info) => {
    console.log(JSON.stringify(info));
})