const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};u();const d=["The Plot in You","The Devil Wears Prada","Pierce the Veil","Norma Jean","The Bled","Say Anything","The Midway State","We Came as Romans","Counterparts","Oh, Sleeper","A Skylit Drive","Anywhere But Here","An Old Dog"],f=r=>document.querySelector(r),s=f("#bands");function l(r){return r.toLocaleLowerCase().replace(/^(the |a |an )/,"").trim()}const c=d.sort((r,o)=>l(r)>l(o)?1:-1);if(!s)throw new Error("element is null");s.innerHTML=c.map(r=>`<li>${r}</il>`).join("");console.table(c);
