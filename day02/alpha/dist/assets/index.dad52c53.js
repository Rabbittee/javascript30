const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}};u();const d=document.querySelector("header");d.innerHTML=`<nav class="bg-white bg-opacity-75 fixed top-0 w-full">
<ul class="flex justify-between p-4">
  <li class="my-auto"><h1 class="text-2xl">alpha's js 30 days</h1></li>
  <li><a class="hover:text-blue-500 text-xl" href="https://github.com/Rabbittee/JavaScript30/tree/main/day02/alpha">Github</a></li>
</ul>
</nav>`;const s=o=>document.querySelector(o),i=(o,t)=>o/t*360,c=(o,t)=>{o.style.transform=`rotate(${t+90}deg)`},f=()=>{const o=new Date,t={element:s(".hour-hand"),value:o.getHours()},l={element:s(".min-hand"),value:o.getMinutes()},r={element:s(".second-hand"),value:o.getSeconds()},e=s(".time-value");e.innerHTML=`<span>${t.value}:${l.value}:${r.value}</span>`,c(t.element,i(t.value*2,24)),c(l.element,i(l.value,60)),c(r.element,i(r.value,60))};setInterval(f,1e3);
