chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  var url = new URL(tab.url),
      hasPunnyCode = /(^|\.)xn\-\-/.test(url.hostname);

  chrome.browserAction.setBadgeBackgroundColor({
      color: hasPunnyCode ? '#ff0000' : '',
      tabId: tabId
  });
  chrome.browserAction.setBadgeText({
      text: hasPunnyCode ? '!!!' : '',
      tabId: tabId
  });
});
