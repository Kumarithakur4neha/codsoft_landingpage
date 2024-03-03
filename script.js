gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();


 var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3-elem",
        scroller: ".main",
        start: "top 50%",
        end: "top -10%",
        scrub: 2,
    }
})
tl1.to(".page3-elem",{
    transform:"translateX(-70%)",
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".header",
        scroller: ".main",
        // markers:true,
        start: "top 0",
        end: "top -20%",
        scrub: 2,
    }
})
tl2.to(".header",{
    y: -40,
    yoyo: true,
    opacity: 0,
    stagger: 0.3,
})
tl2.from(".age h1",{
    y: -50,
    scale: 1.15,
    delay:1,
    opacity: 0,
    duration: 0.8
})

tl2.from(".page1-img img",{
    y: -50,
    scale: 1.15,
    delay:1,
    opacity: 0,
    duration: 0.8,
    
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2elem-img",
        scroller: ".main",
        start: "top 80%",
        // markers:true,
        end: "top 70%",
        scrub: 2,
    }
})
tl3.from(".page2elem-img img",{
    x:100,
    scale:1.3,
    opacity:0,
})
tl3.from(".page2 h1",{
    y: -50,
    scale: 1.15,
    delay:1,
    opacity: 0,
    duration: 0.8  
})
tl3.from(".page2-left h2",{
    y:30,
    opacity:0,

})
tl3.from(".page2-left p",{
    x:-30,
    opacity:0,

})