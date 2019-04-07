const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', (data) => {
    changeColor.style.backgroundColor = data.color;
    changeColor.innerText = data.color;
});

changeColor.onclick = (element) => {
    const color = element.innerText;
    chrome.tabs.query({ active: true, currentWindow: truse }, (tabs) => {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: `document.body.style.backgroundColor = "${color}"` }
        )
    })
}