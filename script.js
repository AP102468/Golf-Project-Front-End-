//Query selector is used to add html element into javascript
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.6,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        /*markers:true,*/ /*It shows where it starts and where ends*/
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        /*markers:true,*/
        start:"top -15%",
        end:"top -70%",
        scrub:2,
    }
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.6px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,//To Pop-up
    duration:5,
    //stagger:0.4,//Delay popup
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        /*markers:true,*/
        start:"top 75%",
        end:"top 65%",
        scrub:1, //This is necessary to show the result
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,//To Pop-up
    duration:5,
    stagger:0.1,//Delay popup
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        /*markers:true,*/
        start:"top 71%",
        end:"top 60%",
        scrub:2, //This is necessary to show the result
    }
})
gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 51%",
        end:"top 46%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 48%",
        scrub:5
    }
})
gsap.from("#page4 h1",{
    y:50,
    Color:"#95C11E",
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 95%",
        end:"top 85%",
        scrub:3
    }
})