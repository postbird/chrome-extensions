// "browser_action":{
//     "badge": "images/badge_off_example.png"
// },


// chrome.browserAction.setBadgeText({text: 'ON'});
// chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});


// chrome.runtime.onInstalled.addListener(() => {
//     // 当 url 变更的时候，首先移除所有的规则
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//         // 增加新规则
//         chrome.declarativeContent.onPageChanged.addRules([
//             {
//                 // 规则的条件是 URL 中包含 ptbird
//                 conditions: [
//                     new chrome.declarativeContent.PageStateMatcher({
//                         pageUrl: { urlContains: 'ptbird' }
//                     })
//                 ],
//                  // 如果负责规则进行的动作
//                  actions: [ new chrome.declarativeContent.ShowPageAction() ]
//             }
//         ])
//     })
// });

// 创建上下文菜单
const kLocales = {
    'com.au': 'Australia',
    'com.br': 'Brazil',
    'ca': 'Canada',
    'cn': 'China',
    'fr': 'France',
    'it': 'Italy',
    'co.in': 'India',
    'co.jp': 'Japan',
    'com.ms': 'Mexico',
    'ru': 'Russia',
    'co.za': 'South Africa',
    'co.uk': 'United Kingdom'
  };
chrome.runtime.onInstalled.addListener(() => {
    for (let key of Object.keys(kLocales)) {
        chrome.contextMenus.create({
            id: key,
            title: kLocales[key],
            type: 'normal',
            contexts: ['selection'],
        });
    }
});