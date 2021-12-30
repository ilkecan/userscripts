// ==UserScript==
// @name        redirect issueexplorer to github
// @namespace   ilkecan
// @match       http*://issueexplorer.com/*
// @grant       none
// @icon        https://issueexplorer.com/components/css/img/favicon.png
// @run-at      document-start
// @version     0.1.0
// @author      ilkecan
// @description redirect issueexplorer to github
// ==/UserScript==

"use strict";

const [scheme, _, domain, ...path] = window.location.href.split('/');

switch (path[0]) {
  case "issue": {
    const [user, repo, issueNo] = path.slice(1);
    window.location.replace(`${scheme}//github.com/${user}/${repo}/issues/${issueNo}`);
    break;
  }

  case "repo": {
    const [user, repo] = path.slice(1);
    window.location.replace(`${scheme}//github.com/${user}/${repo}`);
    break;
  }
}
