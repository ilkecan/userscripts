// ==UserScript==
// @name        e-Nabız password maxlength restriction remover
// @namespace   ilkecan
// @match       https://enabiz.gov.tr/
// @grant       none
// @version     1.0.0
// @author      ilkecan
// @description e-Nabız giriş sayfasında şifredeki maksimum uzunluk kısıtlamasını kaldırır.
// ==/UserScript==

$(document).ready(() => {
    $("#password").removeAttr("maxlength");
});
