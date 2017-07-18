function getDirectionFromHome(info) {
  chrome.storage.sync.get('home', function(result) {
    if (result.home != null && result.home.length > 0) {
      getDirection(result.home, info.selectionText);
    } else {
      alert("You have not set home address yet. You can click on the How Far extension to set it.");
    }
  });
};

function getDirectionFromWork(info) {
  chrome.storage.sync.get('work', function(result) {
    if (result.work != null && result.work.length > 0) {
      getDirection(info.selectionText, result.work);
    } else {
      alert("You have not set work address yet. You can click on the How Far extension to set it.");
    }
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