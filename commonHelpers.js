import{a as S,S as L,N as q,K as M,M as B,A as C,i as I}from"./assets/vendor-CPXm-ZWR.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();S.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function N(){try{return await S.get("/reviews")}catch(t){console.log(t)}}async function P(t){try{return await S.post("/requests",t)}catch(n){throw n}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header-modal-btn"),n=document.querySelector(".header-modal-close"),a=document.querySelectorAll(".header-modal-anchor"),c=document.querySelector(".header-modal-order-link"),e=document.querySelector(".header-modal-window"),o=document.body,r=document.querySelector(".header-hidden-menu"),p=document.querySelector(".header-menu"),w=document.querySelectorAll(".header-anchor");let d=!1;function f(){e.style.display="flex",o.style.overflow="hidden",e.animate([{opacity:0,transform:"translateX(10px)"},{opacity:1,transform:"translateX(0)"}],{duration:300,easing:"ease-in-out",fill:"forwards"})}function s(){e.animate([{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(10px)"}],{duration:200,easing:"ease-in-out",fill:"forwards"}).onfinish=()=>{e.style.display="none"},o.style.overflow=""}t.addEventListener("click",f),n.addEventListener("click",s),a.forEach(m=>{m.addEventListener("click",s)}),c.addEventListener("click",s);function u(){r.animate([{opacity:0,transform:"translateY(-20px)"},{opacity:1,transform:"translateY(0)"}],{duration:300,easing:"ease",fill:"forwards"}),r.classList.add("open"),d=!0}function g(){r.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-20px)"}],{duration:300,easing:"ease",fill:"forwards"}).onfinish=()=>{r.classList.remove("open")},d=!1}function i(){d?g():u()}p.addEventListener("click",i),w.forEach(m=>{m.addEventListener("click",g)}),document.addEventListener("click",function(m){d&&!r.contains(m.target)&&!p.contains(m.target)&&g()})});new L(".swiper-container",{modules:[q,M,B],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},loop:!0});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".main-button"),n=document.querySelector(".color-buttons"),a=document.querySelectorAll(".color-button"),c=document.querySelectorAll(".g-color"),e=document.querySelectorAll(".s-color"),o=document.querySelectorAll(".color-text"),r=document.querySelectorAll(".c-svg"),p=document.querySelectorAll(".colored-background-image"),w={"#ed3b44":{gradient:"linear-gradient(90.11deg, #1c1d20 49.69%, #69292d 67.71%, #ed3b44 99.91%)",image:"/src/img/colored-images/colored-1-x1.png"},"#c6e327":{gradient:"linear-gradient(90.11deg, #1c1d20 49.69%, #596808 67.71%, rgba(198, 227, 39, 0.76) 99.91%)",image:"/src/img/colored-images/colored-2-x1.png"},"#0041e8":{gradient:"linear-gradient(90.11deg, #1c1d20 49.69%, #001958 67.71%, #0041e8 99.91%)",image:"/src/img/colored-images/colored-3-x1.png"},"#e6533c":{gradient:"linear-gradient(90.11deg, #1c1d20 49.69%, #9f3626 67.71%, #e6533c 99.91%)",image:"/src/img/colored-images/colored-4-x1.png"},"#2b4441":{gradient:"linear-gradient(90.11deg, #1c1d20 49.69%, #1e3633 67.71%, #2b4441 99.91%)",image:"/src/img/colored-images/colored-5-x1.png"},"#ff7f08":{gradient:"linear-gradient(90.11deg, #1c1d20 49.69%, #ac5300 67.71%, #ff7f08 99.91%)",image:"/src/img/colored-images/colored-6-x1.png"}},d=s=>{const{gradient:u,image:g}=w[s];c.forEach(i=>{i.style.background=u}),e.forEach(i=>{i.style.backgroundColor=s}),o.forEach(i=>{i.style.color=s}),r.forEach(i=>{i.style.fill=s}),p.forEach(i=>{i.style.backgroundImage=`url(${g})`})},f=localStorage.getItem("selectedColor");f&&d(f),a.forEach(s=>{s.addEventListener("click",()=>{const u=s.getAttribute("data-color").toLowerCase();localStorage.setItem("selectedColor",u),d(u)})}),t.addEventListener("click",()=>{n.classList.toggle("show")})});new L(".swiper",{modules:[q,M],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});const y=document.querySelector(".position-container .swiper-button-prev"),v=document.querySelector(".position-container .swiper-button-next"),O=document.querySelector(".hiddenPrev"),D=document.querySelector(".hiddenNext");function x(){D.style.display=v.hasAttribute("disabled")?"block":"none",v.firstElementChild.style.display=v.hasAttribute("disabled")?"none":"block",O.style.display=y.hasAttribute("disabled")?"block":"none",y.firstElementChild.style.display=y.hasAttribute("disabled")?"none":"block"}x();v.addEventListener("click",x);y.addEventListener("click",x);new C(".faq-accordion-container",{showMultiple:!0});new L(".swiper",{modules:[q],slidesPerView:"auto",spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},grabCursor:!0});const V=document.querySelector(".js-list-reviews");function $({author:t,avatar_url:n,review:a}){return`<li class="item-review swiper-slide">
           <img src="${n}" class="img-review" alt="${t}" />
           <h3 class="name-review">${t}</h3>
           <p class="text-review">${a}</p>
          </li>`}function H(t){return t.map($).join("")}async function T(){try{const t=await N();V.innerHTML=H(t.data)}catch(t){console.log(t.status),I.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Not found"})}}T();const b=document.getElementById("contact-form"),h=document.getElementById("email-input"),k=document.getElementById("email-error"),l=document.querySelector(".wt-modal-overlay"),Y=document.querySelector(".wt-modal-info"),R=document.querySelector(".wt-modal-close-btn");function E(t){Y.textContent=t,l.style.opacity="1",l.style.pointerEvents="auto",l.style.visibility="visible"}function A(){l.style.opacity="0",l.style.pointerEvents="none",l.style.visibility="hidden"}b.addEventListener("submit",async function(t){t.preventDefault();const n=new FormData(b),a=n.get("email").trim();if(h.checkValidity())h.classList.remove("invalid"),k.style.display="none";else{h.classList.add("invalid"),k.style.display="block";return}try{const c={email:a,comment:n.get("comments").trim()},e=await P(c);e.status===201?(E("Your request has been successfully submitted!"),b.reset()):E(`Error: ${e.data.message}`)}catch{E("An unexpected error occurred. Please try again.")}});R.addEventListener("click",A);l.addEventListener("click",function(t){t.target===l&&A()});
//# sourceMappingURL=commonHelpers.js.map
