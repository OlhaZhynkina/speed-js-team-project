import{a as N,A as D,S as I,N as M,P as X,K as T,M as $,i as H}from"./assets/vendor--oliQ_P2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();N.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function K(){try{return await N.get("/reviews")}catch(e){console.log(e)}}async function W(e,s){try{return(await N.post("/requests",{email:e,comment:s})).data}catch(l){throw l}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".header-modal-btn"),s=document.querySelector(".header-modal-close"),l=document.querySelectorAll(".header-modal-anchor"),r=document.querySelector(".header-modal-order-link"),t=document.querySelector(".header-modal-window"),n=document.body,i=document.querySelector(".header-hidden-menu"),w=document.querySelector(".header-menu"),p=document.querySelectorAll(".header-anchor");let h=!1;function E(){t.style.display="flex",n.style.overflow="hidden",t.animate([{opacity:0,transform:"translateX(10px)"},{opacity:1,transform:"translateX(0)"}],{duration:300,easing:"ease-in-out",fill:"forwards"})}function v(){t.animate([{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(10px)"}],{duration:200,easing:"ease-in-out",fill:"forwards"}).onfinish=()=>{t.style.display="none"},n.style.overflow=""}e.addEventListener("click",E),s.addEventListener("click",v),l.forEach(u=>{u.addEventListener("click",v)}),r.addEventListener("click",v);function S(){i.animate([{opacity:0,transform:"translateY(-20px)"},{opacity:1,transform:"translateY(0)"}],{duration:300,easing:"ease",fill:"forwards"}),i.classList.add("open"),h=!0}function a(){i.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-20px)"}],{duration:300,easing:"ease",fill:"forwards"}).onfinish=()=>{i.classList.remove("open")},h=!1}function y(){h?a():S()}w.addEventListener("click",y),p.forEach(u=>{u.addEventListener("click",a)}),document.addEventListener("click",function(u){h&&!i.contains(u.target)&&!w.contains(u.target)&&a()})});new D(".about-accordion-container",{showMultiple:!0});new I(".about-swiper-container",{slidesPerView:"auto",spaceBetween:0,loop:!0,modules:[M,X,T,$],navigation:{nextEl:".swiper-button-next"},pagination:{el:".swiper-pagination",clickable:!0},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".main-button"),s=document.querySelector(".color-buttons"),l=document.querySelectorAll(".color-button"),r=document.querySelectorAll(".g-color"),t=document.querySelectorAll(".s-color"),n=document.querySelectorAll(".color-text"),i=document.querySelectorAll(".c-svg"),w=document.querySelectorAll(".colored-background-image"),p=document.querySelectorAll(".h-circle"),h={"#c6e327":{className:"cool-color-lime"},"#0041e8":{className:"cool-color-blue"},"#ed3b44":{className:"cool-color-red"},"#b662dd":{className:"cool-color-purple"},"#237f76":{className:"cool-color-teal"},"#ff7f08":{className:"cool-color-orange"}},E={"#ed3b44":"red-clr","#0041e8":"blue-clr","#c6e327":"yellow-clr","#b662dd":"purple-clr","#237f76":"green-clr","#ff7f08":"orange-clr"},v=a=>{var V;const y=E[a],u=(V=h[a])==null?void 0:V.className;r.forEach(o=>o.classList.remove(...Object.values(E))),t.forEach(o=>o.style.backgroundColor=""),n.forEach(o=>o.style.color=""),i.forEach(o=>o.style.stroke=""),w.forEach(o=>o.style.backgroundImage=""),p.forEach(o=>o.classList.remove(...Object.values(h).map(Y=>Y.className))),r.forEach(o=>y&&o.classList.add(y)),t.forEach(o=>o.style.backgroundColor=a),n.forEach(o=>o.style.color=a),i.forEach(o=>o.style.stroke=a),p.forEach(o=>u&&o.classList.add(u))},S=localStorage.getItem("selectedColor");S&&v(S),l.forEach(a=>{a.addEventListener("click",()=>{const y=a.getAttribute("data-color").toLowerCase();localStorage.setItem("selectedColor",y),v(y)})}),e.addEventListener("click",()=>{s.classList.toggle("show")})});new I(".swiper-projects",{modules:[M,T],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},on:{slideChange:function(){f()}}});const A=document.querySelector(".section.projects"),k=document.querySelector(".position-container .swiper-button-prev"),q=document.querySelector(".position-container .swiper-button-next"),z=document.querySelector(".hiddenPrev"),F=document.querySelector(".hiddenNext");function f(){F.style.display=q.hasAttribute("disabled")?"block":"none",q.firstElementChild.style.display=q.hasAttribute("disabled")?"none":"block",z.style.display=k.hasAttribute("disabled")?"block":"none",k.firstElementChild.style.display=k.hasAttribute("disabled")?"none":"block"}f();q.addEventListener("click",f);k.addEventListener("click",f);A.addEventListener("touchstart",f);A.addEventListener("touchend",f);A.addEventListener("touchmove",f);A.addEventListener("keyup",e=>{(e.key==="ArrowRight"||e.key==="ArrowLeft")&&f()});new D(".faq-accordion-container",{showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){let e={root:null,rootMargin:"0px",threshold:.1};function s(t,n){t.forEach(i=>{i.target.querySelectorAll(".marquee__inner").forEach(p=>{i.isIntersecting?p.classList.add("animate"):p.classList.remove("animate")})})}let l=new IntersectionObserver(s,e),r=document.querySelector(".covers-section");r?l.observe(r):console.error("Елемент .covers-section не знайдено")});document.querySelector(".review-js");const x=document.querySelector(".review-btn-prev"),C=document.querySelector(".review-btn-next"),_=document.querySelector(".hiddenPrevRev"),G=document.querySelector(".hiddenNextRev");function L(){G.style.display=C.hasAttribute("disabled")?"block":"none",C.firstElementChild.style.display=C.hasAttribute("disabled")?"none":"block",_.style.display=x.hasAttribute("disabled")?"block":"none",x.firstElementChild.style.display=x.hasAttribute("disabled")?"none":"block"}L();setTimeout(()=>{L()},100);function J(e){new I(".swiper",{modules:[M,T],slidesPerView:1,spaceBetween:50,breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1440:{slidesPerView:4,spaceBetween:40}},navigation:{nextEl:".review-btn-next",prevEl:".review-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},on:{slideChange:function(){setTimeout(()=>{L()},100),this.activeIndex>=e&&this.slideTo(e,0)},reachEnd:function(){document.querySelector(".review-btn-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".review-btn-prev").classList.add("disabled")}}})}C.addEventListener("click",()=>{setTimeout(()=>{L()},100)});x.addEventListener("click",()=>{setTimeout(()=>{L()},100)});const Q=document.querySelector(".js-list-reviews");function Z({author:e,avatar_url:s,review:l}){return`<li class="item-review swiper-slide">
           <img src="${s}" class="img-review" alt="${e}" />
           <h3 class="name-review">${e}</h3>
           <p class="text-review">${l}</p>
          </li>`}function ee(e){return e.map(Z).join("")}async function te(){try{const e=await K();if(Q.innerHTML=ee(e.data),e.data.length===0)throw error;J(e.data.length)}catch(e){console.log(e.status),H.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Not found"})}}te();const d=document.getElementById("email"),c=document.querySelector(".comments"),j=document.querySelector(".contact-form"),b=document.getElementById("email-success"),g=document.getElementById("text-success"),m=document.querySelector(".wt-btn"),P=document.querySelector(".wt-modal-overlay"),R=document.querySelector(".wt-modal-container"),oe=document.querySelector(".wt-modal-close-btn"),se=document.querySelector(".wt-modal-title"),ne=document.querySelector(".wt-modal-info");d.addEventListener("input",U);c.addEventListener("input",U);const re=e=>{e.classList.add("highlighted"),setTimeout(()=>{e.classList.remove("highlighted")},2e3)};m.addEventListener("click",()=>{m.disabled&&re(c)});j.addEventListener("submit",async e=>{var s,l;e.preventDefault(),R.classList.remove("is-hidden"),P.classList.remove("is-hidden");try{const r=await W(d.value.trim(),c.value.trim());se.textContent=r.title,ne.textContent=r.message}catch(r){H.show({message:((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.message)||r.message||"An error occurred",backgroundColor:"#ef4040",position:"topRight",messageSize:16,messageColor:"#fff",messageLineHeight:"150%",timeout:4e3})}finally{j.reset(),m.disabled=!0,d.classList.remove("error"),d.classList.remove("success"),c.classList.remove("error"),c.classList.remove("success"),b.textContent="",g.textContent="",c.classList.remove("highlighted-wt")}});function U(){const e=d.checkValidity()&&d.value.trim()!=="",s=c.value.trim()!=="";e?(d.classList.remove("error"),d.classList.add("success"),b.textContent="Success!",b.style.color="#3cbc81",s?(c.classList.remove("highlighted-wt"),c.classList.remove("error"),c.classList.add("success"),g.textContent="Success!",g.style.color="#3cbc81"):(c.classList.add("highlighted-wt"),c.classList.remove("success"),c.classList.add("error"),g.textContent="Enter a message",g.style.color="#e74a3b")):(d.classList.remove("success"),d.classList.add("error"),b.textContent="Invalid email, try again",b.style.color="#e74a3b",c.classList.remove("highlighted-wt"),c.classList.remove("success"),c.classList.remove("error"),g.textContent=""),m.disabled=!(e&&s),m.disabled?m.style.backgroundColor="#3B3B3B":m.style.backgroundColor=""}m.addEventListener("click",()=>{R.classList.remove(".is-hidden")});const O=()=>{R.classList.add("is-hidden"),P.classList.add("is-hidden")};oe.addEventListener("click",O);P.addEventListener("click",O);document.addEventListener("keydown",e=>{e.key==="Escape"&&O()});const B=document.querySelector(".scroll-up-btn");B.addEventListener("click",ce);async function ce(){await new Promise(e=>{window.scrollTo({top:0,behavior:"smooth"}),e()})}function le(){window.scrollY>1300?B.classList.remove("scroll-up-btn-hidden"):B.classList.add("scroll-up-btn-hidden")}window.addEventListener("scroll",le);
//# sourceMappingURL=commonHelpers.js.map
