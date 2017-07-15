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

function loadStorage() {
  chrome.storage.sync.get('home', function(result) {
    var homeInput = document.getElementById('home');
    homeInput.value = result.home;
  });

  chrome.storage.sync.get('work', function(result) {
    var workInput = document.getElementById('work');
    workInput.value = result.work;
  });
};