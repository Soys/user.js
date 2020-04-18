// ==UserScript==
// @name         用户中心投稿修正
// @namespace    https://github.com/Soys/user.js/tree/master/AcFun
// @version      0.5
// @description  修正用户中心投稿相关按钮
// @author       Soys
// @match        https://www.acfun.cn/member/
// @match        http://www.acfun.cn/member/
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
    acpart[6].className = 'part-guide-left hidden';
    var acdiv = acpart[5].getElementsByTagName('div');
    var aclink = acdiv[0].getElementsByTagName('a');
    aclink[0].innerHTML = '<i class="icon icon-upload"></i>创作中心';
    aclink[0].href = '#area=post-history';
    aclink[0].className = 'tab fixed';
    acpart[5].innerHTML = acpart[5].innerHTML + '<div class="mainer"><a href="#area=upload-video" class="tab"><i class="icon"></i>视频投稿</a><a href="#area=post-article" class="tab"><i class="icon"></i>文章投稿</a><a href="#area=post-history" class="tab"><i class="icon"></i>过往投稿</a><a href="https://member.acfun.cn/" class="tab"><i class="icon"></i>新投稿中心</a><a href="#area=create-album" class="tab"><i class="icon"></i>创建合辑</a><a href="#area=album-manage" class="tab"><i class="icon"></i>合辑管理</a></div>';
    acpart[7].className = acpart[7].className + ' hidden';
})();
