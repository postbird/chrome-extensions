chrome.storage.onChanged.addListener((changes, namespace) => {
    console.log(changes);
    console.log(namespace);
})