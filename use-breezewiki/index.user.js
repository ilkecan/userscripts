// ==UserScript==
// @name        use breezewiki
// @namespace   ilkecan
// @match       https://*.fandom.com/*
// @grant       none
// @icon        https://breezewiki.com/static/breezewiki.svg
// @run-at      document-start
// @version     0.1.0
// @author      ilkecan
// @description Use a BreezeWiki instance
// ==/UserScript==

"use strict";

// https://docs.breezewiki.com/Links.html#%28part._.Instances%29
const instance = "breezewiki.com";
window.location.replace(window.location.href.replace(/(?<=\.)fandom\.com(?=\/)/, instance));
