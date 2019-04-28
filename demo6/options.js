// 通过 chrome.storage 保存
function saveOptions() {
    const color = document.getElementById('color').value;
    const likesColor = document.getElementById('like').value;
    chrome.storage.sync.set({
        favoriteColor: color,
        likesColor: likesColor,
    }, () => {
        // 更新状态文本
        const status = document.getElementById('status');
        status.textContent = 'options saved';
        // 隐藏状态文本
        setTimeout(() => {
            status.textContent = '';
        }, 500);
    })
}

// 重置所有的表单状态
function restoreOptions() {
    // 默认是 color = 'red' 并且 likesColor = 'true'
    chrome.storage.sync.get({
        favoriteColor: 'red',
        likesColor: true
    }, () => {
        document.getElementById('color').value = items.favoriteColor;
        document.getElementById('like').checked = items.likesColor;
    });
    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('save').addEventListener('click', save_options);
}