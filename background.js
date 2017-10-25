/**
 * CONTEXT MENU ACTIONS
 */
chrome.contextMenus.create({
    "title": "Copy Links", "contexts": ["selection"],
    "onclick": doCopy
});

function doCopy(info, tab) {
    chrome.tabs.executeScript(null, {file: "content.js"});
}


/**
 * RESPONSE FROM CONTENT.JS ACTIONS
 */
chrome.runtime.onMessage.addListener(function (msg, sender) {
    if ((msg.doCopy)) {
        copyTextToClipboard(msg.data);
    }
});

function copyTextToClipboard(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
}



