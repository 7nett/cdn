/**handles:wp-embed**/
!function(e,t){"use strict";function r(){if(!s){s=!0;var e=-1!==navigator.appVersion.indexOf("MSIE 10"),r=!!navigator.userAgent.match(/Trident.*rv:11\./),a=t.querySelectorAll("iframe.wp-embedded-content"),n,o,i,c;for(o=0;o<a.length;o++)i=a[o],i.getAttribute("data-secret")||(c=Math.random().toString(36).substr(2,10),i.src+="#?secret="+c,i.setAttribute("data-secret",c)),(e||r)&&(n=i.cloneNode(!0),n.removeAttribute("security"),i.parentNode.replaceChild(n,i))}}var a=!1,s=!1;t.querySelector&&e.addEventListener&&(a=!0),e.wp=e.wp||{},e.wp.receiveEmbedMessage||(e.wp.receiveEmbedMessage=function(r){var a=r.data;if((a.secret||a.message||a.value)&&!/[^a-zA-Z0-9]/.test(a.secret)){var s=t.querySelectorAll('iframe[data-secret="'+a.secret+'"]'),n=t.querySelectorAll('blockquote[data-secret="'+a.secret+'"]'),o,i,c,d,l;for(o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)i=s[o],r.source===i.contentWindow&&(i.removeAttribute("style"),"height"===a.message&&(c=parseInt(a.value,10),c>1e3?c=1e3:~~c<200&&(c=200),i.height=c),"link"===a.message&&(d=t.createElement("a"),l=t.createElement("a"),d.href=i.getAttribute("src"),l.href=a.value,l.host===d.host&&t.activeElement===i&&(e.top.location.href=a.value)))}},a&&(e.addEventListener("message",e.wp.receiveEmbedMessage,!1),t.addEventListener("DOMContentLoaded",r,!1),e.addEventListener("load",r,!1)))}(window,document);