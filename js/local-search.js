var searchFunc=function(t,e,a){"use strict";var i=document.getElementById(e),n=document.getElementById(a);n.innerHTML="<div class='m-auto text-center'><div class='spinner-border' role='status'><span class='sr-only'>Loading...</span></div><br/>Loading...</div>",$.ajax({url:t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();n.innerHTML="",i.addEventListener("input",function(){var t="",a=this.value.trim().toLowerCase().split(/[\s\-]+/);if(n.innerHTML="",!(this.value.trim().length<=0)){if(e.forEach(function(e){var i=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var n=e.title.trim(),l=n.toLowerCase(),r=e.content.trim().replace(/<[^>]+>/g,""),s=r.toLowerCase(),c=e.url,o=-1,u=-1,d=-1;if(""!==s?a.forEach(function(t,e){o=l.indexOf(t),u=s.indexOf(t),o<0&&u<0?i=!1:(u<0&&(u=0),0===e&&(d=u))}):i=!1,i){t+="<a href='"+c+"' class='list-group-item list-group-item-action font-weight-bolder search-list-title'>"+n+"</a>";var v=r;if(d>=0){var h=d-20,p=d+80;h<0&&(h=0),0===h&&(p=100),p>v.length&&(p=v.length);var f=v.substring(h,p);a.forEach(function(t){var e=new RegExp(t,"gi");f=f.replace(e,"<span class='pink-text'>"+t+"</span>")}),t+="<p class='search-list-content'>"+f+"...</p>"}}}),-1===t.indexOf("list-group-item"))return $("#local-search-input").addClass("invalid").removeClass("valid");$("#local-search-input").addClass("valid").removeClass("invalid"),n.innerHTML=t}})}}),$(document).on("click","#local-search-close",function(){$("#local-search-input").val("").removeClass("invalid").removeClass("valid"),$("#local-search-result").html("")})},getSearchFile=function(t){searchFunc(t,"local-search-input","local-search-result")};