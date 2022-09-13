// ==UserScript==
// @name        use invidious
// @namespace   ilkecan
// @match       https://www.youtube.com/*
// @grant       none
// @icon        https://invidious.io/favicon-32x32.png
// @run-at      document-start
// @version     0.1.0
// @author      ilkecan
// @description Use an invidious instance
// ==/UserScript==

"use strict";

const instance = "invidious.namazso.eu";
window.location.replace(window.location.href.replace(/(?<=\/\/)www.youtube.com/, instance));
