const button = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');

button.onclick = () => {
    console.log('asd');
    chrome.permissions.request({
        permissions: ['tabs'],
    }, (granted) => {
        if (granted) {
            alert('request permission Success!');
        } else {
            alert('request permission Failed!');
        }
    })
}

button2.onclick = () => {
    console.log('asd');
    chrome.permissions.remove({
        permissions: ['tabs'],
    }, (granted) => {
        if (granted) {
            alert('remove permission Success!');
        } else {
            alert('remove permission Failed!');
        }
    })
}