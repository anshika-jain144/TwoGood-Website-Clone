function locomotiveAnimations(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimations()



function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: 0.7,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: 0.7,
      },
    });

    gsap.to("#nav-part2 #icons", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: 0.7,
        },
      });

  }
  navbarAnimation()



function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })  
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left: dets.x - 60,
        top: dets.y - 80
        // right:dets.x - 70,
        // bottom:dets.y -80
    })  
})

}
videoconAnimation()



function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:110,
        opacity:0,
        delay : 0.5,
        duration:0.7,
        stagger : 0.3
    })
    gsap.from("#page1 #video-container",{
        // y:110,
        scale:0.8,
        opacity:0,
        delay : 1,
        duration:0.7,
        // stagger : 0.3
    })
}
loadingAnimation()



function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(1)",
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(0)",
            })
        })
    })
    
}
cursorAnimation()


function Animationdets(){
    document.querySelectorAll("#page2 #elem1 .dets img").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#page2 #elem1 .dets img",{
        opacity:1,
       y:-10,
       stagger:true,
    //    duration:0.1,
    //    delay:0.3
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#page2 #elem1 .dets img",{
        opacity:0,
            })
        })
    })

    document.querySelectorAll("#page2 #elem2 .dets img").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#page2 #elem2 .dets img",{
        opacity:1,
       y:-10,
       stagger:true,
    //    duration:0.1,
    //    delay:0.3
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#page2 #elem2 .dets img",{
        opacity:0,
            })
        })
    })
    
    document.querySelectorAll("#page2 #elem3 .dets img").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#page2 #elem3 .dets img",{
        opacity:1,
       y:-10,
       stagger:true,
    //    duration:0.1,
    //    delay:0.3
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#page2 #elem3 .dets img",{
        opacity:0,
            })
        })
    })
    
    
    var detts = document.querySelector("#page2 .elem .dets")
    var detsheading1 = document.querySelector("#page2 #elem1 .dets #heading")
    detts.addEventListener("mouseenter",function(){
        gsap.to(detsheading1,{
            opacity:1,
            y:-10,
            stagger:true,
            // duration:0.1,
            // delay:0.3
        })
    })
    var detts = document.querySelector("#page2 .elem .dets")
    var detsheading1 = document.querySelector("#page2 #elem1 .dets #heading")
    detts.addEventListener("mouseleave",function(){
        gsap.to(detsheading1,{
            opacity:0
        })
    })


}

Animationdets()




