// ==UserScript==
// @name        redirect githubmemory to github
// @namespace   ilkecan
// @match       http*://githubhot.com/*
// @match       http*://githubmate.com/*
// @match       http*://githubmemory.com/*
// @grant       none
// @icon        https://cdn.jsdelivr.net/gh/JeffreyBool/githubmemory-cdn@26.0/images/favicon.ico
// @run-at      document-start
// @version     0.1.0
// @author      ilkecan
// @description redirect github{hot,mate,memory} to github
// ==/UserScript==

"use strict";

const [scheme, _, domain, ...path] = window.location.href.split('/');

switch (path[0]) {
  case path[0].match(/@.*/)?.input: {
    window.location.replace(`${scheme}//github.com/${path[0].substring(1)}`);
    break;
  }

  case "repo": {
    const [user, repo] = path.slice(1);
    window.location.replace(`${scheme}//github.com/${path.slice(1).join('/')}`);
    break;
  }
}
