const m=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}};m();const c=r=>document.querySelector(r),o=c("#myCanvas"),n=o.getContext("2d"),p=c("#brush"),v=c("#clear"),f=o.offsetTop,y=o.offsetLeft;o.width=window.innerWidth-y;o.height=window.innerHeight-f;let l=!1,d=50,a=!0;const w=r=>{const s=r.target;n.strokeStyle=s.value},L=()=>{n.clearRect(0,0,o.width,o.height)},E=r=>{!l||(console.log("draw"),n.lineWidth=d,n.lineCap="round",n.lineTo(r.clientX,r.clientY-f),n.stroke(),(n.lineWidth>=50||n.lineWidth<=1)&&(a=!a),a?d++:d--)},O=r=>{console.log(r),l=!0},h=()=>{l=!1,n.stroke(),n.beginPath()};p.addEventListener("change",w);v.addEventListener("click",L);o.addEventListener("mousedown",O);o.addEventListener("mouseup",h);o.addEventListener("mouseout",h);o.addEventListener("mousemove",E);
