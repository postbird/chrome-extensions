chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.greeting == "Hello")
        sendResponse({ farewell: "goodbye" });
});


chrome.runtime.onConnect.addListener((port) => {
    console.log(port);

    port.onMessage.addListener((msg) => {
        console.log(msg);
        if (msg.name == "ptbird")
            port.postMessage({ question: "what's your name?" });
        else if (msg.answer == "My name is postbird")
            port.postMessage({ question: "How are you?" });
        else if (msg.answer == "I am fine, thank U!")
            port.postMessage({ question: "I don't get it." });
    })
});