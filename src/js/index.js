//Section 1 images
import "../static/section1/main-logo.png";
import "../static/section1/main-text.png";
import "../static/section1/main-background.png";
import "../static/section1/main-background2.png";
import "../static/section1/main-icon1.png";
import "../static/section1/main-icon2.png";
import "../static/section1/main-icon3.png";
import "../static/section1/main-image1.png";
import "../static/section1/main-image2.png";

//Section 2 images
import "../static/section2/sec2-icon.png";
import "../static/section2/sec2-background.png";
import "../static/section2/sec2-backCont.png";
import "../static/section2/sec2-background2.png";
import "../static/section2/sec2-plant.png";
import "../static/section2/sec2-container.png";

//Section 3 images
import "../static/section3/sec3-background.png";
import "../static/section3/sec3-premio.png";
import "../static/section3/sec3-arrow-right.png";
import "../static/section3/sec3-arrow-left.png";

//Section 4 images 
import "../static/section4/sec4-background.png";
import "../static/section4/sec4-backgroundTop.png";

//Section 5 images
import "../static/section5/sec5-background.png";
import "../static/section5/sec5-background2.png";
import "../static/section5/sec5-photo.png";
import "../static/section5/sec5-icon.png";
import "../static/section5/sec5-imageLeft.png";
import "../static/section5/sec5-imageRight.png";

//Section 6 images
import "../static/section6/sec6-background.png";
import "../static/section6/sec6-app.png";
import "../static/section6/sec6-play.png";
import "../static/section6/sec6-logo.png";
import "../static/section6/sec6-general.png";
import "../static/section6/sec6-imageRight.png";

//Footer images
import "../static/footer/footer-logo.png";
import "../static/footer/footer-facebook.png";
import "../static/footer/footer-instagram.png";
import "../static/footer/footer-global.png";

//Leafs
import "../static/leaf/leaf1.png";
import "../static/leaf/leaf2.png";
import "../static/leaf/leaf3.png";
import "../static/leaf/leaf4.png";
import "../static/leaf/leaf5.png";
import "../static/leaf/leaf6.png";

import "slick-carousel";
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import "../styles/main.scss";

import { gsap, TweenLite, TweenMax, Linear, Sine } from "gsap";

$(document).ready(function() {
    //Carousel
    $('.prize-carousel').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: `
            <img class="slick-prev" src="./static/sec3-arrow-left.png">
        `,
        nextArrow: `
            <img class="slick-next" src="./static/sec3-arrow-right.png">
        `
    });    

    $('.photo-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: `
            <img class="slick-prev" src="./static/sec3-arrow-left.png">
        `,
        nextArrow: `
            <img class="slick-next" src="./static/sec3-arrow-right.png">
        `
    });   

    var falling = true;

    TweenLite.set("#sec1__leafCont",{perspective:600});

    var total = 20;
    var container1 = document.getElementById("sec1__leafCont"),	
    w1 = $("#sec1__leafCont").width() ,
    h1 = $("#sec1__leafCont").height();
    
    for (let i=0; i<total; i++){ 
        var Div1 = document.createElement('div');
        TweenLite.set(Div1,{attr:{class:'dot'},x:R(0,w1),y:R(-200,-150),z:R(-200,200)});
        TweenLite.set(Div1,{attr:{class:'dot'},x:R(0,w1),y:R(-200,-150),z:R(-200,200)});
        let size = R(100, 200);
        $(Div1).css({
            height: size,
            width: size
        });
        container1.appendChild(Div1);
        animm(Div1, 1);
    }
    
    function animm(elm, contNumber){   
        let height;
        if(contNumber === 1) {
            height = h1;
        }
        TweenMax.to(elm,R(6,15),{y:height+100,ease:Linear.easeNone,repeat:-1,delay:-15});
        TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
        TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
    };

    function R(min,max) {return min+Math.random()*(max-min)};
});

// $(document).ready(function() {
//     // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//     // let vh = window.innerHeight * 0.01;
//     // // Then we set the value in the --vh custom property to the root of the document
//     // document.documentElement.style.setProperty('--vh', `${vh}px`);

//     let isScrolled = false;
//     let currentSelected = 0;
//     let isAnimating = false;
//     let isMobile = false;

//     let player1 = videojs('video-desktop-1', {
//         fluid: true
//     });
//     let player2 = videojs('video-desktop-2', {
//         fluid: true
//     });
//     let player3 = videojs('video-desktop-3', {
//         fluid: true
//     });
//     let playerMobile1 = videojs('video-mobile-1', {
//         fluid: true
//     });
//     let playerMobile2 = videojs('video-mobile-2', {
//         fluid: true
//     });
//     let playerMobile3 = videojs('video-mobile-3', {
//         fluid: true
//     });

//     let tlIn = gsap.timeline();
//     let tlOut = gsap.timeline();

//     const stopAllVideosAndResetDesktop = () => {
//         player1.pause();
//         player1.currentTime(0);
//         player1.trigger('loadstart');
//         player2.pause();
//         player2.currentTime(0);
//         player2.trigger('loadstart');
//         player3.pause();
//         player3.currentTime(0);
//         player3.trigger('loadstart');
//     }

//     const stopAllVideosAndResetMobile = () => {
//         playerMobile1.pause();
//         playerMobile1.currentTime(0);
//         playerMobile1.trigger('loadstart');
//         playerMobile2.pause();
//         playerMobile2.currentTime(0);
//         playerMobile2.trigger('loadstart');
//         playerMobile3.pause();
//         playerMobile3.currentTime(0);
//         playerMobile3.trigger('loadstart');
//     }

//     //mouseWheel scroll event
//     $(window).on("wheel", function(event) {
//         console.log("enter");
//         if (event.originalEvent.deltaY <= 0) {
//             if(!tlOut.isActive() && !tlIn.isActive() && isScrolled) {
//                 isScrolled = false;
//                 currentSelected = 0;
//                 tlOut
//                 .to(".innerContDesktop .sec1", {duration: 1, y: "0%"})
//                 .to(".innerContDesktop .sec2", {duration: 1, y: "0%"}, "-=1")
//                 .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "0"}, "-=1")
//                 .to(".innerContDesktop .part__cont", {duration: 0.5, opacity: "1"})
//                 $(".innerContDesktop .divStrip").css({"opacity" : "0"});
//                 $(".innerContDesktop .divStrip2").css({
//                     "opacity" : "0",
//                     "display": "none"
//                 });
//                 $(".innerContDesktop .sec2__part").css({
//                     "cursor" : "auto",
//                     "flex" : "1"
//                 });
//                 $("#divClose1, #divClose2, #divClose3").css({
//                     "opacity" : "1",
//                     "display" : "flex",
//                     "width": "100%"
//                 });
//                 $(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn").css({
//                     "display": "flex",
//                     "opacity": "1"
//                 });
//                 $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
//                     "display": "none",
//                     "opacity": "0"
//                 });
//                 $(".innerContDesktop .divClose").css({
//                     "padding": "0 80px"
//                 });

//                 stopAllVideosAndResetDesktop();
//                 stopAllVideosAndResetMobile();
//             }
//         }
//         else {
//             if(!tlIn.isActive() && !tlOut.isActive() && isScrolled === false) {
//                 isScrolled = true;
//                 tlIn
//                 .to(".innerContDesktop .part__cont", {duration: 0.5, opacity: "0"})
//                 .to(".innerContDesktop .divStrip", {duration: 0.5, opacity: "1"}, "-=0.5")
//                 .to(".innerContDesktop .sec1, .innerContDesktop .sec2", {duration: 1, y: "-100%"})
//                 .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"});
//                 $(".innerContDesktop .sec2__part").css({"cursor" : "pointer"});
//             }
//         }
//     });

//     let tlp1 = gsap.timeline();
//     let tlp2 = gsap.timeline();
//     let tlp3 = gsap.timeline();

//     let tlc1 = gsap.timeline();

//     $(".innerContDesktop .sec2__part").on("click", (e) => {
//         // console.log(e.target);
//         if(tlIn.isActive() || tlOut.isActive()) return;

//         if(isScrolled) {
//             $("#strip1, #strip2, #strip3").css({"opacity": "0"});
//             $(".innerContDesktop .divStrip2").css({
//                 "opacity": "1",
//                 "display" : "flex"
//             });
//             $(".innerContDesktop .divClose").css({
//                 "padding": "0px"
//             });
//             $(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn").css({
//                 "display": "none",
//                 "opacity": "0"
//             });
//             $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
//                 "display": "flex",
//                 "opacity": "1"
//             });
//         }

//         if(($(e.target).hasClass("part1") || $(e.target).hasClass("mPart1")) && isScrolled) {
//             if(currentSelected != 1) {
//                 currentSelected = 1;
//                 //desktop
//                 $(".innerContDesktop .part1 .divClose").css({
//                     "display": "flex",
//                     "width": "100%"
//                 });
//                 $(".innerContDesktop .part2 .divClose, .innerContDesktop .part3 .divClose").css({
//                     "opacity": "0",
//                 });
//                 $(".innerContDesktop .part1 .divStrip2 .divStrip2__icon").addClass("active");
//                 $(".innerContDesktop .part2 .divStrip2 .divStrip2__icon").removeClass("active");
//                 $(".innerContDesktop .part3 .divStrip2 .divStrip2__icon").removeClass("active");
//                 $(".innerContDesktop .part1 .divCloseOut").css({
//                     "pointer-events" : "auto"
//                 })
//                 $(".innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
//                     "pointer-events" : "none"
//                 });
//                 stopAllVideosAndResetDesktop();


//                 tlp1
//                 .to(".innerContDesktop .part1 .divStrip2 .divStrip2__partText", {duration: 0.5, opacity: 0})
//                 .to(".innerContDesktop .part1 .divClose", {duration: 0.5, opacity: 1}, "-=0.5")
//                 .to(".innerContDesktop .part2 .divStrip2__partText", {duration: 0.5, opacity: 1}, "-=0.5")
//                 .to(".innerContDesktop .part2 .divClose", {duration: 0.5, width: 0}, "-=0.5")
//                 .to(".innerContDesktop .part3 .divStrip2__partText", {duration: 0.5, opacity: 1},"-=0.5")
//                 .to(".innerContDesktop .part3 .divClose", {duration: 0.5, width: 0}, "-=0.5")
//                 .to("#sector1", {duration: 0.5, "flex-basis": `${window.innerWidth - 180}px`}, "-=0.5")
//                 .to("#sector2", {duration: 0.5, "flex-basis": "90px"}, "-=0.5")
//                 .to("#sector3", {duration: 0.5, "flex-basis": "90px"}, "-=0.5");
//             } else {
//                 currentSelected = 0;

//                 tlc1
//                 .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"})
//                 .to(".innerContDesktop .sec2__part", {duration: 0.5, "flex-basis": "1"}, "-=0.5")
//                 .to(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn", {duration: 0.5, opacity: "1", display: "flex"},"-=0.5");
//                 $(".innerContDesktop .divStrip").css({"opacity" : "1"});
//                 $(".innerContDesktop .divStrip2").css({
//                     "opacity" : "0",
//                     "display": "none"
//                 });
//                 $(".innerContDesktop .sec2__part").css({
//                     "cursor" : "pointer"
//                 });
//                 $("#divClose1, #divClose2, #divClose3").css({
//                     "opacity" : "1",
//                     "display" : "flex",
//                     "width": "100%"
//                 });
//                 // $(".part1 .divCloseIn, .part2 .divCloseIn, .part3 .divCloseIn").css({
//                 //     "display": "flex",
//                 //     "opacity": "1"
//                 // });
//                 $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
//                     "display": "none",
//                     "opacity": "0"
//                 });
//                 $(".innerContDesktop .divClose").css({
//                     "padding": "0 80px"
//                 });

//                 stopAllVideosAndResetDesktop();
//                 stopAllVideosAndResetMobile();
//             }
//         } else if(($(e.target).hasClass("part2") || $(e.target).hasClass("mPart2")) && isScrolled) {
//             if(currentSelected != 2) {
//                 currentSelected = 2;
//                 //desktop
//                 $(".innerContDesktop .part2 .divClose").css({
//                     "display": "flex",
//                     "width": "100%"
//                 });
//                 $(".innerContDesktop .part1 .divClose, .innerContDesktop .part3 .divClose").css({
//                     "opacity": "0",
//                 });
//                 $(".innerContDesktop .part2 .divStrip2 .divStrip2__icon").addClass("active");
//                 $(".innerContDesktop .part1 .divStrip2 .divStrip2__icon").removeClass("active");
//                 $(".innerContDesktop .part3 .divStrip2 .divStrip2__icon").removeClass("active");
//                 $(".innerContDesktop .part2 .divCloseOut").css({
//                     "pointer-events" : "auto"
//                 })
//                 $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
//                     "pointer-events" : "none"
//                 });
//                 stopAllVideosAndResetDesktop();
    
//                 tlp2
//                 .to(".innerContDesktop .part2 .divStrip2 .divStrip2__partText", {duration: 0.5, opacity: 0})
//                 .to(".innerContDesktop .part2 .divClose", {duration: 0.5, opacity: 1}, "-=0.5")
//                 .to(".innerContDesktop .part1 .divStrip2__partText", {duration: 0.5, opacity: 1}, "-=0.5")
//                 .to(".innerContDesktop .part1 .divClose", {duration: 0.5, width: 0}, "-=0.5")
//                 .to(".innerContDesktop .part3 .divStrip2__partText", {duration: 0.5, opacity: 1},"-=0.5")
//                 .to(".innerContDesktop .part3 .divClose", {duration: 0.5, width: 0}, "-=0.5")
//                 .to("#sector2", {duration: 0.5, "flex-basis": `${window.innerWidth - 180}px`}, "-=0.5")
//                 .to("#sector1", {duration: 0.5, "flex-basis": "90px"}, "-=0.5")
//                 .to("#sector3", {duration: 0.5, "flex-basis": "90px"}, "-=0.5");
//             } else {
//                 currentSelected = 0;

//                 tlc1
//                 .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"})
//                 .to(".innerContDesktop .sec2__part", {duration: 0.5, "flex-basis": "1"}, "-=0.5")
//                 .to(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn", {duration: 0.5, opacity: "1", display: "flex"},"-=0.5");
//                 $(".innerContDesktop .divStrip").css({"opacity" : "1"});
//                 $(".innerContDesktop .divStrip2").css({
//                     "opacity" : "0",
//                     "display": "none"
//                 });
//                 $(".innerContDesktop .sec2__part").css({
//                     "cursor" : "pointer"
//                 });
//                 $("#divClose1, #divClose2, #divClose3").css({
//                     "opacity" : "1",
//                     "display" : "flex",
//                     "width": "100%"
//                 });
//                 // $(".part1 .divCloseIn, .part2 .divCloseIn, .part3 .divCloseIn").css({
//                 //     "display": "flex",
//                 //     "opacity": "1"
//                 // });
//                 $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
//                     "display": "none",
//                     "opacity": "0"
//                 });
//                 $(".innerContDesktop .divClose").css({
//                     "padding": "0 80px"
//                 });

//                 stopAllVideosAndResetDesktop();
//                 stopAllVideosAndResetMobile();
//             }
            
//         } else if(($(e.target).hasClass("part3") || $(e.target).hasClass("mPart3")) && isScrolled) {
//             if(currentSelected != 3) {
//                 currentSelected = 3;
//                 //Desktop
//                 $(".innerContDesktop .part3 .divClose").css({
//                     "display": "flex",
//                     "width": "100%"
//                 });
//                 $(".innerContDesktop .part1 .divClose, .innerContDesktop .part2 .divClose").css({
//                     "opacity": "0",
//                 });
//                 $(".innerContDesktop .part3 .divStrip2 .divStrip2__icon").addClass("active");
//                 $(".innerContDesktop .part1 .divStrip2 .divStrip2__icon").removeClass("active");
//                 $(".innerContDesktop .part2 .divStrip2 .divStrip2__icon").removeClass("active");
//                 $(".innerContDesktop .part3 .divCloseOut").css({
//                     "pointer-events" : "auto"
//                 })
//                 $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut").css({
//                     "pointer-events" : "none"
//                 });
//                 stopAllVideosAndResetDesktop();
    
//                 tlp3
//                 .to(".innerContDesktop .part3 .divStrip2 .divStrip2__partText", {duration: 0.5, opacity: 0})
//                 .to(".innerContDesktop .part3 .divClose", {duration: 0.5, opacity: 1}, "-=0.5")
//                 .to(".innerContDesktop .part2 .divStrip2__partText", {duration: 0.5, opacity: 1}, "-=0.5")
//                 .to(".innerContDesktop .part2 .divClose", {duration: 0.5, width: 0}, "-=0.5")
//                 .to(".innerContDesktop .part1 .divStrip2__partText", {duration: 0.5, opacity: 1},"-=0.5")
//                 .to(".innerContDesktop .part1 .divClose", {duration: 0.5, width: 0}, "-=0.5")
//                 .to("#sector3", {duration: 0.5, "flex-basis": `${window.innerWidth - 180}px`}, "-=0.5")
//                 .to("#sector1", {duration: 0.5, "flex-basis": "90px"}, "-=0.5")
//                 .to("#sector2", {duration: 0.5, "flex-basis": "90px"}, "-=0.5");
//             } else {
//                 currentSelected = 0;

//                 tlc1
//                 .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"})
//                 .to(".innerContDesktop .sec2__part", {duration: 0.5, "flex-basis": "1"}, "-=0.5")
//                 .to(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn", {duration: 0.5, opacity: "1", display: "flex"},"-=0.5");
//                 $(".innerContDesktop .divStrip").css({"opacity" : "1"});
//                 $(".innerContDesktop .divStrip2").css({
//                     "opacity" : "0",
//                     "display": "none"
//                 });
//                 $(".innerContDesktop .sec2__part").css({
//                     "cursor" : "pointer"
//                 });
//                 $("#divClose1, #divClose2, #divClose3").css({
//                     "opacity" : "1",
//                     "display" : "flex",
//                     "width": "100%"
//                 });
//                 // $(".part1 .divCloseIn, .part2 .divCloseIn, .part3 .divCloseIn").css({
//                 //     "display": "flex",
//                 //     "opacity": "1"
//                 // });
//                 $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
//                     "display": "none",
//                     "opacity": "0"
//                 });
//                 $(".innerContDesktop .divClose").css({
//                     "padding": "0 80px"
//                 });

//                 stopAllVideosAndResetDesktop();
//                 stopAllVideosAndResetMobile();
//             }
//         }
//     });

//     let resizeTimer;

//     $(window).on("resize", function() {
//         clearTimeout(resizeTimer);
//         resizeTimer = setTimeout(function() {
//             stopAllVideosAndResetMobile();
//             stopAllVideosAndResetDesktop();
//             // let vh = window.innerHeight * 0.01;
//             // document.documentElement.style.setProperty('--vh', `${vh}px`);
//         }, 250);
//     });
// });

