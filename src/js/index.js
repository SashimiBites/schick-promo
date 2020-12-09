//Section 1 images
import "../static/section1/main-logo.svg";
import "../static/section1/main-text.png";
import "../static/section1/main-background.png";
import "../static/section1/main-icon1.png";
import "../static/section1/main-icon2.png";
import "../static/section1/main-icon3.png";
import "../static/section1/main-image1.png";
import "../static/section1/main-image2.png";
import "../static/section1/main-backVideo.mp4";
import "../static/section1/main-icono.svg";

//Section 2 images
import "../static/section2/sec2-icon.png";
import "../static/section2/sec2-background.png";
import "../static/section2/sec2-backCont.png";
import "../static/section2/sec2-background2.png";
import "../static/section2/sec2-plant.png";
import "../static/section2/sec2-title.svg";
import "../static/section2/sec2-arrow-down.png";
import "../static/section2/sec2-backVideo.mp4";

//Section 3 images
import "../static/section3/sec3-background.png";
import "../static/section3/sec3-premio1.png";
import "../static/section3/sec3-premio2.png";
import "../static/section3/sec3-premio3.png";
import "../static/section3/sec3-premio4.png";
import "../static/section3/sec3-premio5.png";
import "../static/section3/sec3-arrow-right.png";
import "../static/section3/sec3-arrow-left.png";

//Section 4 images 
import "../static/section4/sec4-background.png";
import "../static/section4/sec4-backgroundTop.png";
import "../static/section4/sec4-logo.svg";

//Section 5 images
import "../static/section5/sec5-background.png";
import "../static/section5/sec5-background2.png";
import "../static/section5/sec5-icon.png";
import "../static/section5/sec5-imageLeft.png";
import "../static/section5/sec5-imageRight.png";
import "../static/section5/sec5-photo1.jpg";
import "../static/section5/sec5-photo2.jpg";
import "../static/section5/sec5-photo3.jpg";
import "../static/section5/sec5-photo4.jpg";
import "../static/section5/sec5-photo5.jpg";
import "../static/section5/sec5-photo6.jpg";
import "../static/section5/sec5-photo7.jpg";
import "../static/section5/sec5-arrow-right.png";
import "../static/section5/sec5-arrow-left.png";
import "../static/section5/sec5-tree1.png";
import "../static/section5/sec5-tree2.png";
import "../static/section5/sec5-tree3.png";

//Section 6 images
import "../static/section6/sec6-background.png";
import "../static/section6/sec6-app.png";
import "../static/section6/sec6-play.png";
import "../static/section6/sec6-logo.png";
import "../static/section6/sec6-general.png";
import "../static/section6/sec6-imageRight.png";

//Section 7 images 
import "../static/section7/sec7-imageBack1.jpg";
import "../static/section7/sec7-imageBack2.jpg";
import "../static/section7/sec7-mapa.svg";
import "../static/section7/sec7-title.svg";

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

import * as ScrollMagic from "scrollmagic"; 
import { gsap, TweenLite, TweenMax, TimelineMax, Linear, Sine } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

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
            <img class="slick-prev" src="./static/sec5-arrow-left.png">
        `,
        nextArrow: `
            <img class="slick-next" src="./static/sec5-arrow-right.png">
        `
    });   

    // var falling = true;
    // TweenLite.set("#sec1__leafCont",{perspective:600});

    // var total = 20;
    // var container1 = document.getElementById("sec1__leafCont"),	
    // w1 = $("#sec1__leafCont").width() ,
    // h1 = $("#sec1__leafCont").height();
    
    // for (let i=0; i<total; i++){ 
    //     var Div1 = document.createElement('div');
    //     TweenLite.set(Div1,{attr:{class:'dot'},x:R(0,w1),y:R(-200,-150),z:R(-200,200)});
    //     TweenLite.set(Div1,{attr:{class:'dot'},x:R(0,w1),y:R(-200,-150),z:R(-200,200)});
    //     let size = R(100, 200);
    //     $(Div1).css({
    //         height: size,
    //         width: size
    //     });
    //     container1.appendChild(Div1);
    //     animm(Div1, 1);
    // }
    
    // function animm(elm, contNumber){   
    //     let height;
    //     if(contNumber === 1) {
    //         height = h1;
    //     }
    //     TweenMax.to(elm,R(6,15),{y:height+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    //     TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    //     TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
    // };

    // function R(min,max) {return min+Math.random()*(max-min)};


    //Animations
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let firstTimeline = gsap.timeline();

    setTimeout(() => {
        firstTimeline
        .to("#sec1__backgroundImage", {duration: 1, marginTop: "100px"})
        .to("#sec1__logo", {duration: 1, scale: "1", top: "12px"}, "-=1")
        .to("#sec1__slogan", {duration: 0.5, opacity: 1})
        .to("#sec1_anim1", {duration: 0.5, opacity: 1})
        .to("#sec1_anim2", {duration: 0.5, opacity: 1});
    }, 500);

    let controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#section2"
    })
    .setTween(".sec2__anim1", {duration: 0.5, opacity: 1}) // trigger a TweenMax.to tween
    .addTo(controller);
});


