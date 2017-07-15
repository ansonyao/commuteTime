// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {
  loadStorage();

  var homeInput = document.getElementById('home');
  homeInput.oninput = homeInputHandler;
  homeInput.onpropertychange = homeInput.oninput;

  var workInput = document.getElementById('work');
  workInput.oninput = workInputHandler;
  workInput.onpropertychange = workInput.oninput;

  var radios = document.getElementsByName('commutetool');
  for (var i = 0, length = radios.length; i < length; i++) {
      radios[i].onclick = commuteToolInputHandler;
  }
});


function homeInputHandler() {
    var x = document.getElementById("home").value;
    chrome.storage.sync.set({'home': x}, function() {
    });
};

function workInputHandler() {
    var x = document.getElementById("work").value;
    chrome.storage.sync.set({'work': x}, function() { 
    });
};

function commuteToolInputHandler() {
    var radios = document.getElementsByName('commutetool');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        chrome.storage.sync.set({'commutetool': radios[i].value}, function () {
        });
        break;
      }
    }
};

function loadStorage() {
  chrome.storage.sync.get('home', function(result) {
    var homeInput = document.getElementById('home');
    homeInput.value = result.home;
  });

  chrome.storage.sync.get('work', function(result) {
    var workInput = document.getElementById('work');
    workInput.value = result.work;
  });

  chrome.storage.sync.get('commutetool', function(result) {
    console.log(result.commutetool);
    var radios = document.getElementsByName('commutetool');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value === result.commutetool) {
          radios[i].checked = true;
        } else {
          radios[i].checked = false;
        }
    }
  });
};