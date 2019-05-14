const buttonSetTitle = document.getElementById('setTitle');
const buttonGetTitle = document.getElementById('getTitle');
const setPopup = document.getElementById('setPopup');
const getPopup = document.getElementById('getPopup');
const setBadgeText = document.getElementById('setBadgeText');
const clearBadgeText = document.getElementById('clearBadgeText');
const getBadgeText = document.getElementById('getBadgeText');
const setBadgeBackgroundColor = document.getElementById('setBadgeBackgroundColor');
const getBadgeBackgroundColor = document.getElementById('getBadgeBackgroundColor');

buttonSetTitle && buttonSetTitle.addEventListener('click', () => {
    chrome.browserAction.setTitle({
        title: 'set new title'
    }, () => {
        alert('set new title successed!')
    })
});
 
buttonGetTitle && buttonGetTitle.addEventListener('click', () => {
    chrome.browserAction.getTitle({}, (res) => {
        alert(res);
    })
}); 

setPopup.addEventListener('click', () => {
    chrome.browserAction.setPopup({
        popup: './popup2.html' 
    }, (res) => {
        alert(JSON.stringify(res))
    }) 
});

getPopup.addEventListener('click', () => {
    chrome.browserAction.getPopup({}, (res) => {
        alert(JSON.stringify(res))
    })
});

setBadgeText.addEventListener('click', () => {
    chrome.browserAction.setBadgeText({
        text: 'newBadge'
    }, (res) => {
        alert(JSON.stringify(res))
    })
});

clearBadgeText.addEventListener('click', () => {
    chrome.browserAction.setBadgeText({
        text: ''
    }, (res) => {
        alert(JSON.stringify(res))
    })
});

getBadgeText.addEventListener('click', () => {
    chrome.browserAction.getBadgeText({}, (res) => {
        alert(JSON.stringify(res))
    })
});

setBadgeBackgroundColor.addEventListener('click', () => {
    chrome.browserAction.setBadgeBackgroundColor({
        color: '#FF5000'
    }, (res) => {
        alert(JSON.stringify(res))
    })
});

getBadgeBackgroundColor.addEventListener('click', () => {
    chrome.browserAction.getBadgeBackgroundColor({}, (res) => {
        alert(JSON.stringify(res))
    })
});



