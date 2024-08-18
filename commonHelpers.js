import{S as p,a as f,N as b,K as S,A as L,i as q}from"./assets/vendor-DIIOPkX_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const x=document.querySelectorAll(".about");x.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});new p(".swiper-wrapper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},loop:!0});f.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function C(){try{return await f.get("/reviews")}catch(e){console.log(e)}}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".main-button"),r=document.querySelector(".color-buttons"),n=document.querySelectorAll(".color-button"),s=document.querySelectorAll(".g-color"),t=document.querySelectorAll(".s-color"),o=document.querySelectorAll(".color-text"),a=document.querySelectorAll(".c-svg"),E={"#ed3b44":"linear-gradient(90.11deg, #1c1d20 49.69%, #69292d 67.71%, #ed3b44 99.91%)","#c6e327":"linear-gradient(90.11deg, #1c1d20 49.69%, #596808 67.71%, rgba(198, 227, 39, 0.76) 99.91%)","#0041e8":"linear-gradient(90.11deg, #1c1d20 49.69%, #001958 67.71%, #0041e8 99.91%)","#e6533c":"linear-gradient(90.11deg, #1c1d20 49.69%, #9f3626 67.71%, #e6533c 99.91%)","#2b4441":"linear-gradient(90.11deg, #1c1d20 49.69%, #1e3633 67.71%, #2b4441 99.91%)","#ff7f08":"linear-gradient(90.11deg, #1c1d20 49.69%, #ac5300 67.71%, #ff7f08 99.91%)"},g=l=>{const d=E[l];s.forEach(c=>{c.style.background=d}),t.forEach(c=>{c.style.backgroundColor=l}),o.forEach(c=>{c.style.color=l}),a.forEach(c=>{c.style.fill=l})},y=localStorage.getItem("selectedColor");y&&g(y),n.forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-color").toLowerCase();localStorage.setItem("selectedColor",d),g(d)})}),e.addEventListener("click",()=>{r.classList.toggle("show"),e.classList.toggle("hidden")})});new p(".swiper",{modules:[b,S],slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});new L(".faq-accordion-container",{showMultiple:!0});new p(".swiper",{modules:[b],slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},grabCursor:!0});const A=document.querySelector(".js-list-reviews");function M({author:e,avatar_url:r,review:n}){return`<li class="item-review swiper-slide">
           <img src="${r}" class="img-review" alt="${e}" />
           <h3 class="name-review">${e}</h3>
           <p class="text-review">${n}</p>
          </li>`}function k(e){return e.map(M).join("")}async function I(){try{const e=await C();A.innerHTML=k(e.data)}catch(e){console.log(e.status),q.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Not found"})}}I();const u=document.getElementById("contact-form"),w=document.getElementById("email-input"),v=document.getElementById("email-error"),i=document.querySelector(".wt-modal-overlay"),O=document.querySelector(".wt-modal-info"),B=document.querySelector(".wt-modal-close-btn");function m(e){O.textContent=e,i.style.opacity="1",i.style.pointerEvents="auto",i.style.visibility="visible"}function h(){i.style.opacity="0",i.style.pointerEvents="none",i.style.visibility="hidden"}u.addEventListener("submit",async function(e){e.preventDefault();const r=new FormData(u),n=r.get("email").trim();if(n.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))w.classList.remove("invalid"),v.style.display="none";else{w.classList.add("invalid"),v.style.display="block";return}try{const s=await f("https://your-server-endpoint.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,comments:r.get("comments").trim()})}),t=await s.json();s.ok?(m("Your request has been successfully submitted!"),u.reset()):m(`Error: ${t.message}`)}catch{m("An unexpected error occurred. Please try again.")}});B.addEventListener("click",h);i.addEventListener("click",function(e){e.target===i&&h()});
//# sourceMappingURL=commonHelpers.js.map
