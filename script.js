function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "http://www.google.com/search?q=" + info.selectionText,
  });           
}
chrome.contextMenus.create({
  title: "Commute from my home place", 
  contexts:["selection"], 
  onclick: getword,
});

chrome.contextMenus.create({
  title: "Commute from my work place", 
  contexts:["selection"], 
  onclick: getword,
});