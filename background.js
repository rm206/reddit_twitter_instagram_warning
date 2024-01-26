chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab && tab.url && (tab.url.includes('reddit.com') || tab.url.includes('twitter.com') || tab.url.includes('instagram.com')) && changeInfo.status === 'complete') {
        chrome.system.display.getInfo(function (displays) {
            const primaryDisplay = displays.find(display => display.isPrimary);
            const screenWidth = primaryDisplay.bounds.width;
            const screenHeight = primaryDisplay.bounds.height;
            const windowWidth = 1000;
            const windowHeight = 1000;
            const left = (screenWidth - windowWidth) / 2;
            const top = (screenHeight - windowHeight) / 2;

            chrome.windows.create({
                url: chrome.runtime.getURL("popup.html"),
                type: "popup",
                width: windowWidth,
                height: windowHeight,
                left: Math.round(left),
                top: Math.round(top)
            });
        });
    }
});