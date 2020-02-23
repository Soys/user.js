// ==UserScript==
// @name         会员中心投稿修正
// @namespace    https://github.com/Soys/user.js/tree/master/AcFun
// @version      0.1
// @description  修正会员中心投稿相关按钮
// @author       Soys
// @match        https://www.acfun.cn/member/
// @downloadURL  https://github.com/Soys/user.js/raw/master/AcFun/member-center.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var aclist = document.getElementById('list-guide-left');
    var acpart = aclist.getElementsByClassName('part-guide-left');
    acpart[1].getElementsByTagName('div')[1].className = 'mainer';
    acpart[3].className = 'part-guide-left hidden';
    var acdiv = acpart[5].getElementsByTagName('div');
    var aclink = acdiv[0].getElementsByTagName('a');
    aclink[0].href = '#area=post-history';
    aclink[0].innerHTML = '<i class="icon icon-upload"></i>创作中心';
    aclink[0].innerText = '创作中心';
    aclink[0].className = 'tab fixed';
    acpart[5].innerHTML = acpart[5].innerHTML + '<div class="mainer"><a href="#area=upload-video" class="tab"><i class="icon"></i>视频投稿</a><a href="#area=post-article" class="tab"><i class="icon"></i>文章投稿</a><a href="#area=post-history" class="tab"><i class="icon"></i>过往投稿</a><a href="https://member.acfun.cn/upload-video" class="tab"><i class="icon"></i>视频投稿(新)</a><a href="https://member.acfun.cn/post-article" class="tab"><i class="icon"></i>文章投稿(新)</a></div>';
    // Your code here...
})();
