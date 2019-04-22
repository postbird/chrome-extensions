chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "id": "testMenus",
        "title": "test Context Menu",
        "contexts": ["selection"]
    });
});

// 下面将会在创建书签的时候触发
chrome.bookmarks.onCreated.addListener(() => {
    // ...
});

// 
chrome.runtime.onMessage.addListener((message, callback) => {
    if (message.data == "setAlarm") {
        chrome.alarms.create({ delayInMinutes: 5 })
    } else if (message.data == "runLogic") {
        chrome.tabs.executeScript({ file: 'logic.js' });
    } else if (message.data == "changeColor") {
        chrome.tabs.executeScript(
            { code: 'document.body.style.backgroundColor="orange"' });
    };
});