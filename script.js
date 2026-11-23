document.documentElement.classList.add("js-ready");
const menu=document.querySelector(".menu-toggle"), links=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
if(window.gsap&&window.ScrollTrigger){
 gsap.registerPlugin(ScrollTrigger);
 gsap.from(".hero-copy .reveal",{y:35,opacity:0,duration:1.1,stagger:.13,ease:"power3.out",delay:.2});
 gsap.from(".hero-watch",{y:70,opacity:0,rotation:-1,duration:1.5,ease:"power3.out",delay:.35});
 gsap.to(".hero-watch",{y:-28,rotation:-3,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
 gsap.to(".hero-orbit",{rotation:22,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
 gsap.utils.toArray(".reveal:not(.hero-copy .reveal)").forEach(el=>gsap.to(el,{opacity:1,y:0,duration:1,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
 gsap.to(".final-watch",{y:-35,rotation:2,ease:"none",scrollTrigger:{trigger:".finale",start:"top bottom",end:"bottom top",scrub:1}});
}else{
 const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");ob.unobserve(e.target)}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>ob.observe(el));
}
