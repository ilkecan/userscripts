// ==UserScript==
// @name        use the old reddit
// @namespace   ilkecan
// @match       https://www.reddit.com/*
// @grant       none
// @icon        https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png
// @run-at      document-start
// @version     0.1.0
// @author      ilkecan
// @description Use the old reddit subdomain
// ==/UserScript==

"use strict";

window.location.replace(window.location.href.replace(/(?<=\/\/)www(?=\.reddit\.com)/, "old"));
