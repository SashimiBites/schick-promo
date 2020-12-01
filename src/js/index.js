import "../static/logo-principal.png";
import "../static/footer-logo.png";

import "../static/natura.png";
import "../static/hm.png";
import "../static/loreal.png";

import "../static/fotoNatura.jpg";
import "../static/fotoHM.jpg";
import "../static/fotoYSL.jpg";

import "../static/libre.gif";
import "../static/natura.gif";
import "../static/hm.gif";

import "../static/flecha.png";

import "../static/bandera-chile.png";
import "../static/bandera-peru.png";

import "../static/natura.mp4";
import "../static/hm.mp4";
import "../static/loreal.mp4";

import "../styles/main.scss";

import { gsap } from "gsap";

$(document).ready(function() {
    // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // let vh = window.innerHeight * 0.01;
    // // Then we set the value in the --vh custom property to the root of the document
    // document.documentElement.style.setProperty('--vh', `${vh}px`);

    let isScrolled = false;
    let currentSelected = 0;
    let isAnimating = false;
    let isMobile = false;

    let player1 = videojs('video-desktop-1', {
        fluid: true
    });
    let player2 = videojs('video-desktop-2', {
        fluid: true
    });
    let player3 = videojs('video-desktop-3', {
        fluid: true
    });
    let playerMobile1 = videojs('video-mobile-1', {
        fluid: true
    });
    let playerMobile2 = videojs('video-mobile-2', {
        fluid: true
    });
    let playerMobile3 = videojs('video-mobile-3', {
        fluid: true
    });

    let tlIn = gsap.timeline();
    let tlOut = gsap.timeline();

    const stopAllVideosAndResetDesktop = () => {
        player1.pause();
        player1.currentTime(0);
        player1.trigger('loadstart');
        player2.pause();
        player2.currentTime(0);
        player2.trigger('loadstart');
        player3.pause();
        player3.currentTime(0);
        player3.trigger('loadstart');
    }

    const stopAllVideosAndResetMobile = () => {
        playerMobile1.pause();
        playerMobile1.currentTime(0);
        playerMobile1.trigger('loadstart');
        playerMobile2.pause();
        playerMobile2.currentTime(0);
        playerMobile2.trigger('loadstart');
        playerMobile3.pause();
        playerMobile3.currentTime(0);
        playerMobile3.trigger('loadstart');
    }

    //mouseWheel scroll event
    $(window).on("wheel", function(event) {
        console.log("enter");
        if (event.originalEvent.deltaY <= 0) {
            if(!tlOut.isActive() && !tlIn.isActive() && isScrolled) {
                isScrolled = false;
                currentSelected = 0;
                tlOut
                .to(".innerContDesktop .sec1", {duration: 1, y: "0%"})
                .to(".innerContDesktop .sec2", {duration: 1, y: "0%"}, "-=1")
                .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "0"}, "-=1")
                .to(".innerContDesktop .part__cont", {duration: 0.5, opacity: "1"})
                $(".innerContDesktop .divStrip").css({"opacity" : "0"});
                $(".innerContDesktop .divStrip2").css({
                    "opacity" : "0",
                    "display": "none"
                });
                $(".innerContDesktop .sec2__part").css({
                    "cursor" : "auto",
                    "flex" : "1"
                });
                $("#divClose1, #divClose2, #divClose3").css({
                    "opacity" : "1",
                    "display" : "flex",
                    "width": "100%"
                });
                $(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn").css({
                    "display": "flex",
                    "opacity": "1"
                });
                $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
                    "display": "none",
                    "opacity": "0"
                });
                $(".innerContDesktop .divClose").css({
                    "padding": "0 80px"
                });

                stopAllVideosAndResetDesktop();
                stopAllVideosAndResetMobile();
            }
        }
        else {
            if(!tlIn.isActive() && !tlOut.isActive() && isScrolled === false) {
                isScrolled = true;
                tlIn
                .to(".innerContDesktop .part__cont", {duration: 0.5, opacity: "0"})
                .to(".innerContDesktop .divStrip", {duration: 0.5, opacity: "1"}, "-=0.5")
                .to(".innerContDesktop .sec1, .innerContDesktop .sec2", {duration: 1, y: "-100%"})
                .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"});
                $(".innerContDesktop .sec2__part").css({"cursor" : "pointer"});
            }
        }
    });

    let tlp1 = gsap.timeline();
    let tlp2 = gsap.timeline();
    let tlp3 = gsap.timeline();

    let tlc1 = gsap.timeline();

    $(".innerContDesktop .sec2__part").on("click", (e) => {
        // console.log(e.target);
        if(tlIn.isActive() || tlOut.isActive()) return;

        if(isScrolled) {
            $("#strip1, #strip2, #strip3").css({"opacity": "0"});
            $(".innerContDesktop .divStrip2").css({
                "opacity": "1",
                "display" : "flex"
            });
            $(".innerContDesktop .divClose").css({
                "padding": "0px"
            });
            $(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn").css({
                "display": "none",
                "opacity": "0"
            });
            $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
                "display": "flex",
                "opacity": "1"
            });
        }

        if(($(e.target).hasClass("part1") || $(e.target).hasClass("mPart1")) && isScrolled) {
            if(currentSelected != 1) {
                currentSelected = 1;
                //desktop
                $(".innerContDesktop .part1 .divClose").css({
                    "display": "flex",
                    "width": "100%"
                });
                $(".innerContDesktop .part2 .divClose, .innerContDesktop .part3 .divClose").css({
                    "opacity": "0",
                });
                $(".innerContDesktop .part1 .divStrip2 .divStrip2__icon").addClass("active");
                $(".innerContDesktop .part2 .divStrip2 .divStrip2__icon").removeClass("active");
                $(".innerContDesktop .part3 .divStrip2 .divStrip2__icon").removeClass("active");
                $(".innerContDesktop .part1 .divCloseOut").css({
                    "pointer-events" : "auto"
                })
                $(".innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
                    "pointer-events" : "none"
                });
                stopAllVideosAndResetDesktop();


                tlp1
                .to(".innerContDesktop .part1 .divStrip2 .divStrip2__partText", {duration: 0.5, opacity: 0})
                .to(".innerContDesktop .part1 .divClose", {duration: 0.5, opacity: 1}, "-=0.5")
                .to(".innerContDesktop .part2 .divStrip2__partText", {duration: 0.5, opacity: 1}, "-=0.5")
                .to(".innerContDesktop .part2 .divClose", {duration: 0.5, width: 0}, "-=0.5")
                .to(".innerContDesktop .part3 .divStrip2__partText", {duration: 0.5, opacity: 1},"-=0.5")
                .to(".innerContDesktop .part3 .divClose", {duration: 0.5, width: 0}, "-=0.5")
                .to("#sector1", {duration: 0.5, "flex-basis": `${window.innerWidth - 180}px`}, "-=0.5")
                .to("#sector2", {duration: 0.5, "flex-basis": "90px"}, "-=0.5")
                .to("#sector3", {duration: 0.5, "flex-basis": "90px"}, "-=0.5");
            } else {
                currentSelected = 0;

                tlc1
                .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"})
                .to(".innerContDesktop .sec2__part", {duration: 0.5, "flex-basis": "1"}, "-=0.5")
                .to(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn", {duration: 0.5, opacity: "1", display: "flex"},"-=0.5");
                $(".innerContDesktop .divStrip").css({"opacity" : "1"});
                $(".innerContDesktop .divStrip2").css({
                    "opacity" : "0",
                    "display": "none"
                });
                $(".innerContDesktop .sec2__part").css({
                    "cursor" : "pointer"
                });
                $("#divClose1, #divClose2, #divClose3").css({
                    "opacity" : "1",
                    "display" : "flex",
                    "width": "100%"
                });
                // $(".part1 .divCloseIn, .part2 .divCloseIn, .part3 .divCloseIn").css({
                //     "display": "flex",
                //     "opacity": "1"
                // });
                $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
                    "display": "none",
                    "opacity": "0"
                });
                $(".innerContDesktop .divClose").css({
                    "padding": "0 80px"
                });

                stopAllVideosAndResetDesktop();
                stopAllVideosAndResetMobile();
            }
        } else if(($(e.target).hasClass("part2") || $(e.target).hasClass("mPart2")) && isScrolled) {
            if(currentSelected != 2) {
                currentSelected = 2;
                //desktop
                $(".innerContDesktop .part2 .divClose").css({
                    "display": "flex",
                    "width": "100%"
                });
                $(".innerContDesktop .part1 .divClose, .innerContDesktop .part3 .divClose").css({
                    "opacity": "0",
                });
                $(".innerContDesktop .part2 .divStrip2 .divStrip2__icon").addClass("active");
                $(".innerContDesktop .part1 .divStrip2 .divStrip2__icon").removeClass("active");
                $(".innerContDesktop .part3 .divStrip2 .divStrip2__icon").removeClass("active");
                $(".innerContDesktop .part2 .divCloseOut").css({
                    "pointer-events" : "auto"
                })
                $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
                    "pointer-events" : "none"
                });
                stopAllVideosAndResetDesktop();
    
                tlp2
                .to(".innerContDesktop .part2 .divStrip2 .divStrip2__partText", {duration: 0.5, opacity: 0})
                .to(".innerContDesktop .part2 .divClose", {duration: 0.5, opacity: 1}, "-=0.5")
                .to(".innerContDesktop .part1 .divStrip2__partText", {duration: 0.5, opacity: 1}, "-=0.5")
                .to(".innerContDesktop .part1 .divClose", {duration: 0.5, width: 0}, "-=0.5")
                .to(".innerContDesktop .part3 .divStrip2__partText", {duration: 0.5, opacity: 1},"-=0.5")
                .to(".innerContDesktop .part3 .divClose", {duration: 0.5, width: 0}, "-=0.5")
                .to("#sector2", {duration: 0.5, "flex-basis": `${window.innerWidth - 180}px`}, "-=0.5")
                .to("#sector1", {duration: 0.5, "flex-basis": "90px"}, "-=0.5")
                .to("#sector3", {duration: 0.5, "flex-basis": "90px"}, "-=0.5");
            } else {
                currentSelected = 0;

                tlc1
                .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"})
                .to(".innerContDesktop .sec2__part", {duration: 0.5, "flex-basis": "1"}, "-=0.5")
                .to(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn", {duration: 0.5, opacity: "1", display: "flex"},"-=0.5");
                $(".innerContDesktop .divStrip").css({"opacity" : "1"});
                $(".innerContDesktop .divStrip2").css({
                    "opacity" : "0",
                    "display": "none"
                });
                $(".innerContDesktop .sec2__part").css({
                    "cursor" : "pointer"
                });
                $("#divClose1, #divClose2, #divClose3").css({
                    "opacity" : "1",
                    "display" : "flex",
                    "width": "100%"
                });
                // $(".part1 .divCloseIn, .part2 .divCloseIn, .part3 .divCloseIn").css({
                //     "display": "flex",
                //     "opacity": "1"
                // });
                $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
                    "display": "none",
                    "opacity": "0"
                });
                $(".innerContDesktop .divClose").css({
                    "padding": "0 80px"
                });

                stopAllVideosAndResetDesktop();
                stopAllVideosAndResetMobile();
            }
            
        } else if(($(e.target).hasClass("part3") || $(e.target).hasClass("mPart3")) && isScrolled) {
            if(currentSelected != 3) {
                currentSelected = 3;
                //Desktop
                $(".innerContDesktop .part3 .divClose").css({
                    "display": "flex",
                    "width": "100%"
                });
                $(".innerContDesktop .part1 .divClose, .innerContDesktop .part2 .divClose").css({
                    "opacity": "0",
                });
                $(".innerContDesktop .part3 .divStrip2 .divStrip2__icon").addClass("active");
                $(".innerContDesktop .part1 .divStrip2 .divStrip2__icon").removeClass("active");
                $(".innerContDesktop .part2 .divStrip2 .divStrip2__icon").removeClass("active");
                $(".innerContDesktop .part3 .divCloseOut").css({
                    "pointer-events" : "auto"
                })
                $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut").css({
                    "pointer-events" : "none"
                });
                stopAllVideosAndResetDesktop();
    
                tlp3
                .to(".innerContDesktop .part3 .divStrip2 .divStrip2__partText", {duration: 0.5, opacity: 0})
                .to(".innerContDesktop .part3 .divClose", {duration: 0.5, opacity: 1}, "-=0.5")
                .to(".innerContDesktop .part2 .divStrip2__partText", {duration: 0.5, opacity: 1}, "-=0.5")
                .to(".innerContDesktop .part2 .divClose", {duration: 0.5, width: 0}, "-=0.5")
                .to(".innerContDesktop .part1 .divStrip2__partText", {duration: 0.5, opacity: 1},"-=0.5")
                .to(".innerContDesktop .part1 .divClose", {duration: 0.5, width: 0}, "-=0.5")
                .to("#sector3", {duration: 0.5, "flex-basis": `${window.innerWidth - 180}px`}, "-=0.5")
                .to("#sector1", {duration: 0.5, "flex-basis": "90px"}, "-=0.5")
                .to("#sector2", {duration: 0.5, "flex-basis": "90px"}, "-=0.5");
            } else {
                currentSelected = 0;

                tlc1
                .to(".innerContDesktop .divClose", {duration: 0.5, opacity: "1"})
                .to(".innerContDesktop .sec2__part", {duration: 0.5, "flex-basis": "1"}, "-=0.5")
                .to(".innerContDesktop .part1 .divCloseIn, .innerContDesktop .part2 .divCloseIn, .innerContDesktop .part3 .divCloseIn", {duration: 0.5, opacity: "1", display: "flex"},"-=0.5");
                $(".innerContDesktop .divStrip").css({"opacity" : "1"});
                $(".innerContDesktop .divStrip2").css({
                    "opacity" : "0",
                    "display": "none"
                });
                $(".innerContDesktop .sec2__part").css({
                    "cursor" : "pointer"
                });
                $("#divClose1, #divClose2, #divClose3").css({
                    "opacity" : "1",
                    "display" : "flex",
                    "width": "100%"
                });
                // $(".part1 .divCloseIn, .part2 .divCloseIn, .part3 .divCloseIn").css({
                //     "display": "flex",
                //     "opacity": "1"
                // });
                $(".innerContDesktop .part1 .divCloseOut, .innerContDesktop .part2 .divCloseOut, .innerContDesktop .part3 .divCloseOut").css({
                    "display": "none",
                    "opacity": "0"
                });
                $(".innerContDesktop .divClose").css({
                    "padding": "0 80px"
                });

                stopAllVideosAndResetDesktop();
                stopAllVideosAndResetMobile();
            }
        }
    });

    let resizeTimer;

    $(window).on("resize", function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            stopAllVideosAndResetMobile();
            stopAllVideosAndResetDesktop();
            // let vh = window.innerHeight * 0.01;
            // document.documentElement.style.setProperty('--vh', `${vh}px`);
        }, 250);
    });
});

