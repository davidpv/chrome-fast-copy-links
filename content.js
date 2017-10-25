var data = '';
var theLinks = document.links;
for (var i = 0; i < theLinks.length; i++) {
    if (document.getSelection().containsNode(theLinks[i], true) && theLinks[i].href.indexOf('javascript:') == -1) {
        data += theLinks[i].href + '\n';
    }
}
console.log(data);
chrome.runtime.sendMessage({doCopy: true, data: data});
