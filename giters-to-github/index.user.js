// ==UserScript==
// @name        redirect giters to github
// @namespace   ilkecan
// @match       http*://giters.com/*
// @grant       none
// @icon        https://giters.com/images/favicon.svg
// @run-at      document-start
// @version     0.1.0
// @author      ilkecan
// @description redirect giters to github
// ==/UserScript==

"use strict";

window.location.replace(window.location.href.replace(/(?<=\/\/)giters(?=\.com)/, "github"));
