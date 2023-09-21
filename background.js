chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Vérifiez si la page est complètement chargée (changeInfo.status === "complete")
  if (changeInfo.status === "complete") {
    // Exécutez le contenu de content.js dans l'onglet actuel
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    });
  }
});
