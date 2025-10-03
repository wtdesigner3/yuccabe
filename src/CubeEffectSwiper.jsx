import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import ScrollSections from "./ScrollSections";
import css from './new.css?raw';
import Carousel from './Carousel';
import Footer from './Footer';
import AOS from 'aos';
AOS.init();

const CubeEffectSwiper = ({ scrollToSection }) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const { refs, setCurrentPage } = scrollToSection;
    const swiperRef = useRef(null);
    const targetRef = useRef(null);
    var i = 0;
    const [formData, setFormData] = useState({
        'your-name': '',
        'email-address': '',
        'contact-number': '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const alertBox = document.getElementById("form-alert");

        const showAlert = (message, type = 'danger') => {
            alertBox.innerText = message;
            alertBox.className = `alert alert-${type}`;
            alertBox.classList.remove('d-none');
            setTimeout(() => alertBox.classList.add('d-none'), 5000);
        };

        // Form validation rules
        const name = formData['your-name']?.trim();
        const email = formData['email-address']?.trim();
        const phone = formData['contact-number']?.trim();
        const company = formData['company']?.trim();
        const message = formData['message']?.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!name || name.length < 2) {
            showAlert("Please enter your name (at least 2 characters).");
            return;
        }

        if (!email || !emailPattern.test(email)) {
            showAlert("Please enter a valid email address.");
            return;
        }

        if (!phone || !phonePattern.test(phone)) {
            showAlert("Please enter a valid 10-digit contact number.");
            return;
        }

        if (!company || company.length < 2) {
            showAlert("Please enter your company name.");
            return;
        }

        if (!message || message.length < 5) {
            showAlert("Please enter a message (at least 5 characters).");
            return;
        }

        // All validations passed — send the data
        try {
            const response = await fetch('/api/contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
            });

            const result = await response.json();

            if (result.status === 'success') {
            showAlert(result.message || 'Message sent successfully!', 'success');
            } else {
            showAlert(result.message || 'Submission failed.', 'danger');
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert('There was an error submitting the form.', 'danger');
        }
        };

    useEffect(() => {
        const ScreenWidth = window.screen.width;
        

        const pointsContainer = document.querySelector(".points-container");
        gsap.set(pointsContainer, {
            y:-40,
            ease: "none",
        });
        gsap.set(".dotted-line", {
            y:-40,
            ease: "none",
        });
        if(ScreenWidth <= 480){
            gsap.set('.sdf-img', { scale: 7 })
        }else{
            gsap.set('.sdf-img', { scale: 2.7 })
        }
        if(ScreenWidth <= 768){
            gsap.set('.how-it-works-heading-item',{
                x:10,
                ease: "none",
            });
            gsap.set(".text-16-regularsa", { 
                x:5,
                textAlign:"left",
                ease: "none",
            });
            gsap.to(pointsContainer, {
                x: () => -(pointsContainer.scrollWidth - window.innerWidth), // Scroll to show all points
                ease: "none",
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top top", // Pin when points-section hits top
                    end: () => `+=${pointsContainer.scrollWidth - window.innerWidth}`, // Scroll until all points are visible
                    scrub: true, // Smooth scrolling
                    pin: true, // Pin the section during horizontal scroll
                   
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(".textsdsdd", {
                right: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top top", // Pin when points-section hits top
                    end: () => `+=${pointsContainer.scrollWidth - window.innerWidth}`, // Scroll until all points are visible
                    scrub: true, // Smooth scrolling
                    invalidateOnRefresh: true,
                    
                },
            });
            // gsap.to('.how-it-works-heading-item',{
            //     x:"-100%",
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: ".points-section",
            //         start: "top top",
            //         end: "bottom center",
            //         scrub: true, // Smooth scrolli
            //         markers:true,
                    
            //     },
            // });
            // gsap.to('.text-16-regularsa',{
            //     x:"-110%",
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: ".points-section",
            //         start: "top top",
            //         end: "bottom center",
            //         scrub: true, // Smooth scrolli
                    
            //     },
            // });
            // Animate Dotted Line
            gsap.from(".dotted-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1,
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top 10%",
                    end: "top 50%",
                    toggleActions: "play none none none",
                    
                },
            });
        }else{
            
            gsap.to(pointsContainer, {
                x: () => -(pointsContainer.scrollWidth - window.innerWidth), // Scroll to show all points
                ease: "none",
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top top", // Pin when points-section hits top
                    end: () => `+=${pointsContainer.scrollWidth - window.innerWidth}`, // Scroll until all points are visible
                    scrub: true, // Smooth scrolling
                    pin: true, // Pin the section during horizontal scroll

                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
            gsap.to(".textsdsdd", {
                right: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top top", // Pin when points-section hits top
                    end: () => `+=${pointsContainer.scrollWidth - window.innerWidth}`, // Scroll until all points are visible
                    scrub: true, // Smooth scrolling
                    invalidateOnRefresh: true,

                },
            });
            gsap.to('.how-it-works-heading-item', {
                textAlign:"left",
                x:"-100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top 30%",
                    end: "top 10%",
                    scrub: true, 
                    
                },
            });
            gsap.to('.text-16-regularsa',{
                textAlign:"left",
                x:"-110%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top 30%",
                    end: "top 10%",
                    scrub: true,
                    
                    
                },
            });
            // Animate Dotted Line
            gsap.from(".dotted-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1,
                scrollTrigger: {
                    trigger: ".points-section",
                    start: "top 10%",
                    end: "top 50%",
                    toggleActions: "play none none none",
                    
                },
            });
        }
       
        
        gsap.to(".sdf-img", {
            scale: 1,
            scrollTrigger: {
                trigger: ".sdf",
                start: "top center",
                end: "+200px",
                // pin: true,
                scrub: true,
            }
        });
        const ismobile = () => {
            document.querySelector(".sdf-img").src = "/img/TPCUP.jpg";
        }

        const istablet = () => {  
            document.querySelector(".sdf-img").src = "/1.jpg";
        }

        const isDesktops = () => {
            document.querySelector(".sdf-img").src = "/1.jpg";
        }

        function getDeviceType() {
            if (window.matchMedia("(max-width: 480px)").matches) {
                ismobile();
                return "Mobile";
            } else if (window.matchMedia("(min-width: 480px) and (max-width: 768px)").matches) {
                istablet();
                return "Tablet";
            } else {
                isDesktops();
                return "Desktop";
            }
        }

        function detectDeviceTypeChange() {
            let currentDeviceType = getDeviceType();
            // Add event listener for window resize
            window.addEventListener("resize", function () {
                const newDeviceType = getDeviceType();
                if (newDeviceType !== currentDeviceType) {
                    currentDeviceType = newDeviceType; // Update the current device type
                }
            });
        }

        detectDeviceTypeChange();

    }, []);

    return (
        <>
            <style>
                {`
                    .points-section {
                        height: 100vh!important;
                        background: linear-gradient(0deg,#d9d4c5 0%,#b0aca6 100%);
                        position: relative;
                        overflow: hidden;
                        display:flex;
                        flex-direction: column;
                        // justify-content: center;
                        align-items: center;
                    }

                    /* Points Container for Horizontal Scroll */
                    .points-container {
                        display: flex;
                        position: relative;
                        bottom:0;
                        width: max-content; /* Allows container to expand based on content */
                        transform: translateX(45px);
                    }

                    .point {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        width: 35vw; /* Minimal space between points */
                        height: 100%;
                        padding: 10px;
                        text-align: center;
                    }
                    .heading-how{
                        position: relative;
                        top:10vh;
                        width:100%;
                        display: flex;
                        justify-content: center;
                    }
                    .how-it-works-wrap{
                        gap:10px;
                        display:flex;
                        flex-direction: column;
                    }
                    .text-140-regular.how {
                        color: var(--white);
                        letter-spacing: -.01em;
                        line-height:.8em;
                        width: 4em;
                        margin-left: -.035em;
                        font-size: 8em;
                    }
                    .word {
                        position: relative;
                    }   
                    .text-16-regular.max-w-80 {
                        width: 29em;
                        line-height: 130%;
                    }

                    .point.above {
                        align-items: flex-end;
                        justify-content: flex-end;
                       top:2vh;
                    }

                    .point.below {
                        align-items: flex-start;
                        justify-content: flex-start;
                        // padding-top: 20vh; /* In the 20vh space below the dotted line */
                        bottom:-19vh;
                    }

                    .line-1-text-item {
                        grid-column-gap: 1.25em;
                        grid-row-gap: 1.25em;
                        justify-content: flex-start;
                        align-items: flex-end;
                        display: flex;
                    }
                    .number-text {
                        color: #000;
                        letter-spacing: -.03em;
                        font-family: BDO Grotesk, Verdana, sans-serif;
                        font-size: 2em;
                        line-height: 110%;
                    }
                    .text-step.max-504 {
                        width: 15.9em;
                    }
                    .text-step {
                        color: #000;
                        flex: none;
                        text-align:left;
                        font-family: BDO Grotesk, Verdana, sans-serif;
                        font-size: 1.8em;
                        line-height: 110%;
                    }

                    /* Dotted Line (Small Dots) */
                    .dotted-line {
                        position: absolute;
                        bottom: 25vh; /* 20vh from bottom */
                        left: -5px;
                        width: 100%;
                        height: 2px;
                    }
                `}
            </style>
            <style>{css}</style>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        `
                        .button-77 {
                            width:auto;
                            align-items: center;
                            appearance: none;
                            background-clip: padding-box;
                            background-color: initial;
                            background-image: none;
                            border-style: none;
                            box-sizing: border-box;
                            color: #000;
                            cursor: pointer;
                            display: inline-block;
                            flex-direction: row;
                            flex-shrink: 0;
                            font-size: 16px;
                            font-weight: 700;
                            justify-content: center;
                            line-height: 24px;
                            margin: 0;
                            min-height: 64px;
                            outline: none;
                            overflow: visible;
                            padding: 19px 26px;
                            pointer-events: auto;
                            position: relative;
                            text-align: center;
                            text-decoration: none;
                            text-transform: none;
                            user-select: none;
                            -webkit-user-select: none;
                            touch-action: manipulation;
                            vertical-align: middle;
                            word-break: keep-all;
                            z-index: 0;
                        }
                        
                        @media (min-width: 768px) {
                            .button-77 {
                                padding: 19px 32px;
                            }
                        }
                        
                        .button-77:before, .button-77:after {
                            border-radius: 80px;
                        }
                        
                        .button-77:before {
                            background: linear-gradient(270deg, #000 0%, #000 100%);
                            border: 0px solid;
                            content: "";
                            display: block;
                            height: 100%;
                            left: 0;
                            overflow: hidden;
                            position: absolute;
                            top: 0;
                            width: 100%;
                            z-index: -2;
                        }
                        
                        .button-77:after {
                            background-color: initial;
                            background: linear-gradient(270deg, #d9d4c5 0%, #d9d4c5 100%);
                            bottom: 4px;
                            content: "";
                            display: block;
                            left: 4px;
                            overflow: hidden;
                            position: absolute;
                            right: 4px;
                            top: 4px;
                            transition: all 100ms ease-out;
                            z-index: -1;
                        }
                        .button-77:hover{
                            color:#fff!important;
                        }
                        .button-77:hover:not(:disabled):after {
                            bottom: 0;
                            left: 0;
                            right: 0;
                            top: 0;
                            transition-timing-function: ease-in;
                            
                            background:#000;
                        }



                        .button-77:active:not(:disabled) {
                            color: #ccc;
                        }
                        
                        .button-77:active:not(:disabled):after {
                            background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #D9D4C4 0, #86857F 100%);
                            bottom: 4px;
                            left: 4px;
                            right: 4px;
                            top: 4px;
                        }
                        
                        .button-77:disabled {
                            cursor: default;
                            opacity: .24;
                        }
                    `
                }}
            />
            
            <div className="scroll-container" style={{ width: "100vw", overflow: "hidden" }} >
                <Carousel data={{ refs, setCurrentPage }} />
                <div style={{ zIndex: 1 }} className="h-100vh bg-color position-relative h-100vh stagger" ref={refs.about}>
                    <div className='d-flex flex-column gap-5 align-items-center justify-content-center h-100 border-reduis'>
                        <div className="stagger1">
                            <h1 className='text-white secrion-3-font ' data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="top-bottom">co-create </h1>
                            <h1 className='text-white secrion-3-font ' data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="top-bottom">your green</h1>
                            <h1 className='text-white secrion-3-font ' data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="top-bottom">spaces with us</h1>
                        </div>
                        <div className="">
                            <a className="button-77 poppins-regular "  role="button" href="/services">
                                Design Your Space
                            </a>
                        </div>
                    </div>
                </div>

                <div className="YUCCABE overflow-hidden d-none" style={{ position: 'relative', background: "linear-gradient(0deg,#d9d4c5 0%,#b0aca6 100%)" }}>
                    <div style={{ ...styles.rectStyle, fontSize: '800px', backgroundColor: "transparent", zIndex: 1, opacity: 0.2 }} className="textsdsdd h-100vh d-flex flex-column align-items-center justify-content-center poppins-bold">Yuccabe</div>
                    { /* <ScrollSections refs={refs} /> */ }
                </div>
                <section style={{ height:"100%" }}  >
                    <div className="points-section" ref={refs.why}>
                        <div style={{ ...styles.rectStyle, fontSize: '800px', backgroundColor: "transparent", zIndex: 0, opacity: 0.1 }} className="textsdsdd h-100vh d-flex flex-column align-items-center justify-content-center poppins-bold">Yuccabe</div>
                        <div className="heading-how">
                            <div className="how-it-works-wrap">
                                <div className="how-it-works-heading">
                                    <div
                                        className="how-it-works-heading-item"
                                    >
                                        <h2
                                        letters-slide-up-h1=""
                                        text-split-h1=""
                                        className="text-140-regular how"
                                        style={{ opacity: 1 }}
                                        >
                                        <span className="word" style={{ display: "inline-block" }}>
                                            <span
                                            className="char"
                                            style={{
                                                display: "inline-block",
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transform: "translate(0px, 0px)"
                                            }}
                                            >
                                            Why
                                            </span>
                                            
                                        </span>
                                        </h2>
                                        <h2
                                        letters-slide-up-h1=""
                                        text-split-h1=""
                                        className="text-140-regular how second"
                                        style={{ opacity: 1 }}
                                        >
                                        <span className="word" style={{ display: "inline-block" }}>
                                            <span
                                            className="char"
                                            style={{
                                                display: "inline-block",
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transform: "translate(0px, 0px)"
                                            }}
                                            >
                                            Yuccabe?
                                            </span>
                                            
                                        </span>
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    letters-slide-up-h1=""
                                    text-split-h1=""
                                    className="text-16-regular text-16-regularsa max-w-80"
                                    style={{
                                        willChange: "transform",
                                        transform:
                                        "translate3d(0em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d",
                                        opacity: 1
                                    }}
                                >
                                    <span className="word" style={{ display: "inline-block" }}>
                                        <span
                                            className="char"
                                            style={{
                                                display: "inline-block",
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transform: "translate(0px, 0px)"
                                            }}
                                        >
                                            From timeless design to thoughtful craftsmanship, discover why architects, designers, and home creators choose Yuccabe for meaningful green transformations.
                                        </span>
                                       
                                    
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 position-relative d-flex align-items-center h-100">
                            <div className="points-container">
                                <div className="point above">
                                    <div className="line-1-text-item">
                                        <div className="number-text d-none">01</div>
                                        <img src="/img/Home-Silder/1.png" style={{width:'5vw'}} alt="" />
                                        <div className="text-step max-504">
                                            Each planter is handcrafted with care, detail, and refined technique.
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="point below">
                                    <div className="line-1-text-item">
                                        <div className="number-text  d-none">02</div>
                                        <img src="/img/Home-Silder/2.png" style={{width:'5vw'}} alt="" />
                                        <div className="text-step max-504">
                                            Tailored planter solutions perfectly aligned to your space and vision.
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                                <div className="point above">
                                    <div className="line-1-text-item">
                                        <div className="number-text  d-none">03</div>
                                        <img src="/img/Home-Silder/3.png" style={{width:'5vw'}} alt="" />
                                        <div className="text-step max-504">
                                            Preferred by top design professionals across luxury and commercial spaces.
                                        </div>
                                        
                                    </div>
                                     
                                </div>
                                <div className="point below">
                                    <div className="line-1-text-item">
                                        <div className="number-text  d-none">04</div>
                                        <img src="/img/Home-Silder/4.png" style={{width:'5vw'}} alt="" />
                                        <div className="text-step max-504">
                                            Designs that blend beauty, balance, and everyday practicality with ease.
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="point above">
                                    <div className="line-1-text-item">
                                        <div className="number-text  d-none">05</div>
                                        <img src="/img/Home-Silder/5.png" style={{width:'5vw'}} alt="" />
                                        <div className="text-step max-504">
                                            Durable and elegant—perfect for both indoor and outdoor use.
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                <div className="point below">
                                    <div className="line-1-text-item">
                                        <div className="number-text  d-none">06</div>
                                        <img src="/img/Home-Silder/6.png" style={{width:'5vw'}} alt="" />
                                        <div className="text-step max-504">
                                           Successfully styled spaces across India in varied scale and settings.
                                        </div>
                                       
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="dotted-line w-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 2767 12"
                                width={2767}
                                height={12}
                                preserveAspectRatio="xMidYMid meet"
                                style={{
                                    width: "95vw",
                                    transform: "translate3d(0px, 0px, 0px)",
                                    contentVisibility: "visible"
                                }}
                            >
                                <defs>
                                    <clipPath id="__lottie_element_24">
                                        <rect width={2767} height={12} x={0} y={0} />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#__lottie_element_24)">
                                    <g
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                    >
                                        <g opacity={1} transform="matrix(1,0,0,1,6.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,60.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,114.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,168.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,222.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,276.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,330.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,384.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,438.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,492.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,546.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,600.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,654.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,708.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,762.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,816.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,870.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,924.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,978.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1032.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1086.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1140.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1194.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1248.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1302.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1356.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1410.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1464.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1518.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1572.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1626.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1680.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1734.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1788.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1842.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1896.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,1950.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2004.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2058.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2112.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2166.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2220.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2274.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2328.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2382.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2436.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2490.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2544.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2598.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2652.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2706.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                        <g opacity={1} transform="matrix(1,0,0,1,2760.5,6)">
                                            <path
                                                fill="#86857F"
                                                fillOpacity={1}
                                                d=" M0,-6 C3.313999891281128,-6 6,-3.313999891281128 6,0 C6,3.313999891281128 3.313999891281128,6 0,6 C-3.313999891281128,6 -6,3.313999891281128 -6,0 C-6,-3.313999891281128 -3.313999891281128,-6 0,-6z"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </section>
                <div className="sdf  overflow-hidden pt-5" ref={refs.clients}>
                    <div className='d-flex flex-column align-items-center justify-content-center h-100vh w-100 position-relative' >
                        <img src="1.jpg" alt="" style={{ width: '40%', borderRadius: '20px', scale: 2.5 }} className="sdf-img" />
                        
                        <div className=" position-absolute bottom-0 w-100" style={{height:"20vh", display:"flex",alignItems:"center",gap:10 , flexDirection:"column"}} >
                            <div
                                letters-slide-up-h1=""
                                text-split-h1=""
                                className="text-16-regular max-w-80"
                                style={{
                                    willChange: "transform",
                                    transform:
                                    "translate3d(0em, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transformStyle: "preserve-3d",
                                    opacity: 1
                                }}
                                >
                                <span className="word" style={{ display: "inline-block" }}>
                                    <span
                                        className="char"
                                        style={{
                                            display: "inline-block",
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(0px, 0px)"
                                        }}
                                    >
                                       Step into our world of timeless planter designs.
                                    </span>
                                    
                                
                                </span>
                            </div>
                            <a className="button-77 poppins-regular button-772 " role="button" href='/our-products'>
                                Explore Designs
                            </a>
                        </div>
                    </div>
                   
                </div>
                <div className="bg-color contact-us" ref={refs.contact}>
                    <div className="container h-100vh ">
                        <div className='row h-100 align-items-center'>
                            <div className="col-lg-6 col-md-6 col-sm-12 contact-us-info " style={{ textAlign: "left" }}>
                                <div className='py-5'>
                                    <div className='text-white'>
                                        <h1 className="poppins-medium">Have a vision for your space?</h1>
                                    </div>
                                    <div className='text-white description'>
                                        <span className="poppins-medium">We’re here to make it a reality. Whether you’re looking for innovative planters, custom designs, or expert advice, we’re just a call or click away</span>
                                    </div>
                                </div>
                                <div className='text-white tagline'>
                                    <span className="poppins-medium">We collaborate with ambitious companies and aesthetes.</span>
                                </div>
                                <div className='text-white tagline'>
                                    <span className="poppins-medium">Are you one?</span>
                                </div>
                                <div className='text-white py-2 lastline'>
                                    <span className="poppins-medium">Making a change starts with one conversation.
                                        Let’s talk!
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 px-5 form">
                                <form onSubmit={handleSubmit} >
                                    <div className='px-5 poppins-medium' style={{ textAlign: "left" }}>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="your-name" className="form-label">Your name<span>*</span></label>
                                            <input type="text" className="form-control" name="your-name" id="your-name" placeholder='Name you’d like us to remember.'   onChange={handleChange}  />
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="email-address" className="form-label">Email Address<span>*</span></label>
                                            <input type="text" className="form-control" name="email-address" id="email-address" placeholder='We promise — no spam, just style.'   onChange={handleChange}  />
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="contact-number" className="form-label">Contact Number<span>*</span></label>
                                            <input type="text" className="form-control" name="contact-number" id="contact-number" placeholder='Prefer a call? Share your number.'   onChange={handleChange}  />
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="company" className="form-label">Company<span>*</span></label>
                                            <input type="text" className="form-control" name="company" id="company" placeholder='Tell us where creativity is brewing.'   onChange={handleChange}  />
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="message" className="form-label">Message<span>*</span></label>
                                            <input type="text" className="form-control" name="message" id="message" placeholder='Your thoughts, ideas, or questions...'   onChange={handleChange}  />
                                        </div>
                                        <div>
                                            <button className='btn btn-white' style={{ borderRadius: '30px', padding: '10px 30px', fontSize: 14 }}> Send your Message</button>
                                        </div>
                                    </div>
                                </form>
                                <style>
                                    {`
                                        .button-772:after{
                                            background:linear-gradient(270deg, #fff 0%, #fff 100%);
                                        }
                                        .btn-white {
                                            background-color:#fff;
                                        }
                                        .btn-white:hover{
                                            background-color:blue!important;
                                            color:#fff!important;
                                        }
                                    `}
                                </style>

                            </div>
                            <Footer />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

const styles = {
    slide: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    rectStyle: {
        color: "rgba(0, 0, 0, 0.2)",
        top: "2%",
        backgroundColor: "transparent",
        right: "-1400px",
        position: "absolute",
    }
};

export default CubeEffectSwiper;
