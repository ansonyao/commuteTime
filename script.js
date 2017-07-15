function getDirectionFromHome(info) {
  chrome.storage.sync.get('home', function(result) {
    getDirection(result.home, info.selectionText);
  });
};

function getDirectionFromWork(info) {
  chrome.storage.sync.get('work', function(result) {
    getDirection(info.selectionText, result.work);
  });
};


function getDirection(addr1,addr2) {
  chrome.storage.sync.get('commutetool', function(result) {
    chrome.tabs.create({
      url: encodeURI("https://www.google.ca/maps/dir/?api=1&origin=" + addr1 + "&destination=" + addr2 + "&travelmode=" + result.commutetool),
    });
  });
}

chrome.contextMenus.create({
  title: "From my home",
  contexts:["selection"], 
  onclick: getDirectionFromHome,
});

chrome.contextMenus.create({
  title: "To my work",
  contexts:["selection"], 
  onclick: getDirectionFromWork,
});