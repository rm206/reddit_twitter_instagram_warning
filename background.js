chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && (changeInfo.url.includes("reddit.com") || changeInfo.url.includes("twitter.com"))) {
        chrome.tabs.sendMessage(tabId, { action: "warn" });
    }
});
