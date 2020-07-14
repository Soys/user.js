// ==UserScript==
// @name         Asearch
// @namespace    http://soys.github.io/
// @version      0.12
// @description  AcFun搜索辅助小工具
// @author       饃鶻荔௰
// @match        https://www.acfun.cn/search?*
// @match        https://www.acfun.cn/search
// @grant        none
// @updateURL    https://github.com/Soys/user.js/raw/master/AcFun/Asearch.user.js
// ==/UserScript==

(function() {
    function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
    var barS = document.getElementById('search-box--standalone');
    var Sform = barS.getElementsByClassName('form')[0];
    /*var Stext = Sform.getElementsByTagName('input')[0].value;*/
    var Stext = getQueryVariable("keyword");
    var SearchPlus = document.createElement("div");
        SearchPlus.style = 'text-align:center;';
    var ViewType = 'view_window';
    var AcGoogle = 'https://www.google.com/search?q=site:acfun.cn+'+ Stext +'&oq=site';
    var AcBaidu = 'https://www.baidu.com/s?wd=site:acfun.cn+'+ Stext;
    var AcBing = 'https://www.bing.com/search?q=site:acfun.cn+'+ Stext;
    var AcDDG = 'https://duckduckgo.com/?q=site:acfun.cn+'+ Stext;
    var AcSG = 'https://www.sogou.com/web?query=site:acfun.cn+'+ Stext;
    SearchPlus.innerHTML = '<a href='+AcBaidu+' target='+ViewType+'>百度搜索</a> | <a href='+AcGoogle+' target='+ViewType+'>谷歌搜索</a> | <a href='+AcBing+' target='+ViewType+'>必应搜索</a> | <a href='+AcDDG+' target='+ViewType+'>DDG搜索</a> | <a href='+AcSG+' target='+ViewType+'>搜狗搜索</a>';
    Sform.append(SearchPlus);
    // Your code here...
})();
