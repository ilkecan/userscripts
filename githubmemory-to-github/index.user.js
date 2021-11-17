// ==UserScript==
// @name        redirect githubmemory to github
// @namespace   ilkecan
// @match       http*://githubmemory.com/repo/*
// @grant       none
// @icon        https://cdn.jsdelivr.net/gh/JeffreyBool/githubmemory-cdn@26.0/images/favicon.ico
// @run-at      document-start
// @version     0.1.0
// @author      ilkecan
// @description redirect githubmemory to github
// ==/UserScript==

"use strict";

window.location.replace(window.location.href.replace(
  /(?<=\/\/)githubmemory\.com\/repo(?=\/)/,
  "github\.com",
));
