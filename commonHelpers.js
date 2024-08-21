import{a as M,A as U,S as T,N as P,P as K,K as R,M as W,i as Y}from"./assets/vendor--oliQ_P2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();M.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function z(){try{return await M.get("/reviews")}catch(e){console.log(e)}}async function F(e,o){try{return(await M.post("/requests",{email:e,comment:o})).data}catch(r){throw r}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".header-modal-btn"),o=document.querySelector(".header-modal-close"),r=document.querySelectorAll(".header-modal-anchor"),c=document.querySelector(".header-modal-order-link"),t=document.querySelector(".header-modal-window"),n=document.body,i=document.querySelector(".header-hidden-menu"),w=document.querySelector(".header-menu"),p=document.querySelectorAll(".header-anchor");let v=!1;function k(){t.style.display="flex",n.style.overflow="hidden",t.animate([{opacity:0,transform:"translateX(10px)"},{opacity:1,transform:"translateX(0)"}],{duration:300,easing:"ease-in-out",fill:"forwards"})}function y(){t.animate([{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(10px)"}],{duration:200,easing:"ease-in-out",fill:"forwards"}).onfinish=()=>{t.style.display="none"},n.style.overflow=""}e.addEventListener("click",k),o.addEventListener("click",y),r.forEach(u=>{u.addEventListener("click",y)}),c.addEventListener("click",y);function q(){i.animate([{opacity:0,transform:"translateY(-20px)"},{opacity:1,transform:"translateY(0)"}],{duration:300,easing:"ease",fill:"forwards"}),i.classList.add("open"),v=!0}function a(){i.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-20px)"}],{duration:300,easing:"ease",fill:"forwards"}).onfinish=()=>{i.classList.remove("open")},v=!1}function h(){v?a():q()}w.addEventListener("click",h),p.forEach(u=>{u.addEventListener("click",a)}),document.addEventListener("click",function(u){v&&!i.contains(u.target)&&!w.contains(u.target)&&a()})});new U(".about-accordion-container",{showMultiple:!0});new T(".about-swiper-container",{slidesPerView:"auto",spaceBetween:0,loop:!0,modules:[P,K,R,W],navigation:{prevEl:".swiper-button-next"},pagination:{el:".swiper-pagination",clickable:!0},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1}});const x=document.querySelectorAll(".about-swiper-skills");let L=0;function _(e){x.forEach((o,r)=>{o.classList.remove("active"),r===e&&o.classList.add("active")})}_(L);document.querySelector(".swiper-button-next").addEventListener("click",()=>{x[L].classList.remove("active"),L=(L+1)%x.length,x[L].classList.add("active")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".main-button"),o=document.querySelector(".color-buttons"),r=document.querySelectorAll(".color-button"),c=document.querySelectorAll(".g-color"),t=document.querySelectorAll(".s-color"),n=document.querySelectorAll(".color-text"),i=document.querySelectorAll(".c-svg"),w=document.querySelectorAll(".colored-background-image"),p=document.querySelectorAll(".h-circle"),v={"#c6e327":{className:"cool-color-lime"},"#0041e8":{className:"cool-color-blue"},"#ed3b44":{className:"cool-color-red"},"#b662dd":{className:"cool-color-purple"},"#237f76":{className:"cool-color-teal"},"#ff7f08":{className:"cool-color-orange"}},k={"#ed3b44":"red-clr","#0041e8":"blue-clr","#c6e327":"yellow-clr","#b662dd":"purple-clr","#237f76":"green-clr","#ff7f08":"orange-clr"},y=a=>{var D;const h=k[a],u=(D=v[a])==null?void 0:D.className;c.forEach(s=>s.classList.remove(...Object.values(k))),t.forEach(s=>s.style.backgroundColor=""),n.forEach(s=>s.style.color=""),i.forEach(s=>s.style.stroke=""),w.forEach(s=>s.style.backgroundImage=""),p.forEach(s=>s.classList.remove(...Object.values(v).map($=>$.className))),c.forEach(s=>h&&s.classList.add(h)),t.forEach(s=>s.style.backgroundColor=a),n.forEach(s=>s.style.color=a),i.forEach(s=>s.style.stroke=a),p.forEach(s=>u&&s.classList.add(u))},q=localStorage.getItem("selectedColor");q&&y(q),r.forEach(a=>{a.addEventListener("click",()=>{const h=a.getAttribute("data-color").toLowerCase();localStorage.setItem("selectedColor",h),y(h)})}),e.addEventListener("click",()=>{o.classList.toggle("show")})});new T(".swiper-projects",{modules:[P,R],slidesPerView:1,spaceBetween:100,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},on:{slideChange:function(){f()}}});const N=document.querySelector(".section.projects"),C=document.querySelector(".position-container .swiper-button-prev"),A=document.querySelector(".position-container .swiper-button-next"),G=document.querySelector(".hiddenPrev"),J=document.querySelector(".hiddenNext");function f(){J.style.display=A.hasAttribute("disabled")?"block":"none",A.firstElementChild.style.display=A.hasAttribute("disabled")?"none":"block",G.style.display=C.hasAttribute("disabled")?"block":"none",C.firstElementChild.style.display=C.hasAttribute("disabled")?"none":"block"}f();A.addEventListener("click",f);C.addEventListener("click",f);N.addEventListener("touchstart",f);N.addEventListener("touchend",f);N.addEventListener("touchmove",f);N.addEventListener("keyup",e=>{(e.key==="ArrowRight"||e.key==="ArrowLeft")&&f()});new U(".faq-accordion-container",{showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){let e={root:null,rootMargin:"0px",threshold:.1};function o(t,n){t.forEach(i=>{i.target.querySelectorAll(".marquee__inner").forEach(p=>{i.isIntersecting?p.classList.add("animate"):p.classList.remove("animate")})})}let r=new IntersectionObserver(o,e),c=document.querySelector(".covers-section");c?r.observe(c):console.error("Елемент .covers-section не знайдено")});document.querySelector(".review-js");const g=document.querySelector(".review-btn-prev"),B=document.querySelector(".review-btn-next"),Q=document.querySelector(".hiddenPrevRev"),Z=document.querySelector(".hiddenNextRev");function S(){Z.style.display=B.hasAttribute("disabled")?"block":"none",B.firstElementChild.style.display=B.hasAttribute("disabled")?"none":"block",Q.style.display=g.hasAttribute("disabled")?"block":"none",g.firstElementChild.style.display=g.hasAttribute("disabled")?"none":"block"}S();setTimeout(()=>{S()},100);function ee(e){new T(".swiper",{modules:[P,R],slidesPerView:1,spaceBetween:50,breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1440:{slidesPerView:4,spaceBetween:40}},navigation:{nextEl:".review-btn-next",prevEl:".review-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},on:{slideChange:function(){setTimeout(()=>{S()},100),this.activeIndex>=e&&this.slideTo(e,0)},reachEnd:function(){document.querySelector(".review-btn-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".review-btn-prev").classList.add("disabled")}}})}B.addEventListener("click",()=>{setTimeout(()=>{console.log(g.hasAttribute("disabled")),S()},100)});g.addEventListener("click",()=>{setTimeout(()=>{console.log(g.hasAttribute("disabled")),S()},100)});const te=document.querySelector(".js-list-reviews");function oe({author:e,avatar_url:o,review:r}){return`<li class="item-review swiper-slide">
           <img src="${o}" class="img-review" alt="${e}" />
           <h3 class="name-review">${e}</h3>
           <p class="text-review">${r}</p>
          </li>`}function se(e){return e.map(oe).join("")}async function ne(){try{const e=await z();if(te.innerHTML=se(e.data),e.data.length===0)throw error;ee(e.data.length)}catch(e){console.log(e.status),Y.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Not found"})}}ne();const d=document.getElementById("email"),l=document.querySelector(".comments"),H=document.querySelector(".contact-form"),E=document.getElementById("email-success"),b=document.getElementById("text-success"),m=document.querySelector(".wt-btn"),O=document.querySelector(".wt-modal-overlay"),V=document.querySelector(".wt-modal-container"),re=document.querySelector(".wt-modal-close-btn"),ce=document.querySelector(".wt-modal-title"),le=document.querySelector(".wt-modal-info");d.addEventListener("input",X);l.addEventListener("input",X);const ie=e=>{e.classList.add("highlighted"),setTimeout(()=>{e.classList.remove("highlighted")},2e3)};m.addEventListener("click",()=>{m.disabled&&ie(l)});H.addEventListener("submit",async e=>{var o,r;e.preventDefault(),V.classList.remove("is-hidden"),O.classList.remove("is-hidden");try{const c=await F(d.value.trim(),l.value.trim());ce.textContent=c.title,le.textContent=c.message}catch(c){Y.show({message:((r=(o=c.response)==null?void 0:o.data)==null?void 0:r.message)||c.message||"An error occurred",backgroundColor:"#ef4040",position:"topRight",messageSize:16,messageColor:"#fff",messageLineHeight:"150%",timeout:4e3})}finally{H.reset(),m.disabled=!0,d.classList.remove("error"),d.classList.remove("success"),l.classList.remove("error"),l.classList.remove("success"),E.textContent="",b.textContent="",l.classList.remove("highlighted-wt")}});function X(){const e=d.checkValidity()&&d.value.trim()!=="",o=l.value.trim()!=="";e?(d.classList.remove("error"),d.classList.add("success"),E.textContent="Success!",E.style.color="#3cbc81",o?(l.classList.remove("highlighted-wt"),l.classList.remove("error"),l.classList.add("success"),b.textContent="Success!",b.style.color="#3cbc81"):(l.classList.add("highlighted-wt"),l.classList.remove("success"),l.classList.add("error"),b.textContent="Enter a message",b.style.color="#e74a3b")):(d.classList.remove("success"),d.classList.add("error"),E.textContent="Invalid email, try again",E.style.color="#e74a3b",l.classList.remove("highlighted-wt"),l.classList.remove("success"),l.classList.remove("error"),b.textContent=""),m.disabled=!(e&&o),m.disabled?m.style.backgroundColor="#3B3B3B":m.style.backgroundColor=""}m.addEventListener("click",()=>{V.classList.remove(".is-hidden")});const j=()=>{V.classList.add("is-hidden"),O.classList.add("is-hidden")};re.addEventListener("click",j);O.addEventListener("click",j);document.addEventListener("keydown",e=>{e.key==="Escape"&&j()});const I=document.querySelector(".scroll-up-btn");I.addEventListener("click",ae);async function ae(){await new Promise(e=>{window.scrollTo({top:0,behavior:"smooth"}),e()})}function de(){window.scrollY>1300?I.classList.remove("scroll-up-btn-hidden"):I.classList.add("scroll-up-btn-hidden")}window.addEventListener("scroll",de);
//# sourceMappingURL=commonHelpers.js.map
