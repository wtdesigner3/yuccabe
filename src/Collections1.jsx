import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from 'lenis'
// import lenis  from './LenisWrapper'
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import jsdhsjd from "./StackedSections.css?raw";
import AnimatedTypingText from "./AnimatedTypingText";
import Footer from "./Footer"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
gsap.registerPlugin(ScrollTrigger);

const Image = ({ imageData }) => {
  return (
    <>

      {imageData && imageData.map((d) => (
        <LazyLoadImage
          key={d.Entry_ID + "9444"}
          src={d.Image_Link}
          alt="Man adjusting necklace"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: ".3s" },
            className: ` lazy-load-image-background blur lazy-load-image-loaded clickable ${d.Entry_ID == 1 ? 'active' : ''}`
          }}
        />
      ))}
    </>

  )
}
const Collections = () => {

  const [show, setShow] = useState(false);
  const [sections, setSections] = useState([]);
  const [FilterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const lenis = new Lenis({
    duration: .5,
    smooth: true,
    wheelMultiplier: 0.3,
    normalizeWheel: false,
    smoothTouch: false
  });

  useEffect(() => {
    if (!loading) return;

    const el = document.querySelector('.k8nd8');
    if (el) {
      const elWidth = el.clientWidth;
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        // Mobile
        el.style.left = '30px';
      } else {
        // Desktop/tablet - center it
        const leftOffset = (screenWidth - elWidth) / 1.5;

        el.style.left = `${leftOffset}px`;
      }
    }

    const url = new URL(window.location.href);
    const c = url.searchParams.get('tags') || "Karimik";

    const filterButtons = document.querySelectorAll(".sdsss button");
    const productItems = document.querySelectorAll(".panel");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        window.location.href = "?tags=" + filter;
      });
    });

    filterButtons.forEach(btn => {
      const filter = btn.getAttribute("data-filter");
      if (c == filter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    productItems.forEach(item => {
      const category = item.getAttribute("data-category");
      item.style.display = (c == "Karimik" || category == c) ? "" : "none";
    });



    const imageSections = document.querySelectorAll('.image-section');

    const imageHeight = 220;
    const containerHeight = 658.68;
    imageSections.forEach(section => {
      const mainImage = section.querySelector('.right-image');
      const slider = section.querySelector('.slider');
      const clickableImages = section.querySelectorAll('.clickable');
      if (!clickableImages.length || !mainImage || !slider) return;

      const totalImages = clickableImages.length;
      function centerActiveImage(activeImg) {
        if (!activeImg) return;
        const index = Array.from(clickableImages).indexOf(activeImg);
        if (index === -1) return;


        const screenWidth = window.innerWidth;
        if (screenWidth <= 480) {
          const imageHeights = 100;
          const containerHeights = 300;
          const sliderHeight = totalImages * imageHeights;
          let offset = index * imageHeights + imageHeights / 2 - containerHeights / 2;
          offset = Math.max(0, Math.min(offset, sliderHeight - containerHeights));
          slider.style.transform = `translateY(-${offset}px)`;
        } else if (screenWidth <= 768) {
          const imageWidth = 120;
          const containerWidth = 780;
          const sliderHeight = totalImages * imageWidth;
          let offset = index * imageWidth + imageWidth / 2 - containerWidth / 2;
          offset = Math.max(0, Math.min(offset, sliderHeight - containerWidth));

          slider.style.transform = `translateX(-${offset}px)`;
        } else {
          const sliderHeight = totalImages * imageHeight;
          let offset = index * imageHeight + imageHeight / 2 - containerHeight / 2;
          offset = Math.max(0, Math.min(offset, sliderHeight - containerHeight));
          slider.style.transform = `translateY(-${offset}px)`;
        }

      }

      function handleImageClick(img) {

        mainImage.querySelector('img').src = img.querySelector('img').src;
        mainImage.querySelector('img').alt = img.querySelector('img').alt;
        clickableImages.forEach(i => i.classList.remove('active'));
        img.classList.add('active');
        centerActiveImage(img);
      }

      clickableImages.forEach(img => {
        const onClick = () => handleImageClick(img);
        img.addEventListener('click', onClick);
        img._onClick = onClick;
      });

      const initialActiveImage = section.querySelector('.clickable.active');
      if (initialActiveImage) centerActiveImage(initialActiveImage);
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    // if (c !== 'Karimik') {
    //   ScrollTrigger.refresh();
    //   setTimeout(() => {
    //     const div = document.querySelector('.small-section');
    //     if (div) {
    //       const distanceFromDocumentTop = div.offsetTop + 100;
    //       window.scrollBy(0, distanceFromDocumentTop);
    //     }
    //   }, 600);
    // }

    if (window.innerWidth <= 330) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 22%",
          end: "+=200",
          scrub: true,

        },
      });

      tl1.to(".k8nd8", {
        left: 20,
        color: "#d9d4c5",
        fontSize: 40,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 15%",
          end: "+=100",
          scrub: true,
        }
      });
      gsap.set(".h84gf", {
        y: 15,
        duration: 1,
      });
      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 25%",
          end: "+=160",
          scrub: true,

        },
      });
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;

      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 75),
          scrub: true,
          pin: true,
          
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 0, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 0, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 0, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    } else if (window.innerWidth <= 375) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 22%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 20,
        color: "#d9d4c5",
        fontSize: 40,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 20%",
          end: "+=100",
          scrub: true,

        }
      });

      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 25%",
          end: "+=160",
          scrub: true,
        },
      })

      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;

      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 200),
          scrub: true,
          pin: true,
          // markers:true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 40, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 40, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 40, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    } else if (window.innerWidth <= 390) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 20%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 20,
        color: "#d9d4c5",
        fontSize: 60,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 27%",
          end: "+=100",
          scrub: true,

        }
      });
      gsap.set(".h84gf", {
        y: 0,
        duration: 1,
      });
      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 40%",
          end: "+=160",
          scrub: true,

        },
      });
      tl3.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        stagger: function (index) {
          // Group cards as (1,4), (2,5), (3,6)
          return Math.floor(index % 3) * 0.3; // 0s for group 1, 0.3s for group 2, 0.6s for group 3
        },

      })



      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 100),
          scrub: true,
          pin: true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 60, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 60, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 60, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    } else if (window.innerWidth <= 393) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 20%",
          end: "+=200",
          scrub: true,

        },
      });

      tl1.to(".k8nd8", {
        left: 20,
        color: "#d9d4c5",
        fontSize: 60,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 27%",
          end: "+=100",
          scrub: true,

        }
      });
      gsap.set(".h84gf", {
        y: 0,
        duration: 1,
      });
      tl2.to(".h84gf", {
        x: 20,
        duration: 1,
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 40%",
          end: "+=160",
          scrub: true,

        },
      });
      tl3.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        // stagger: function(index) {
        //   // Group cards as (1,4), (2,5), (3,6)
        //   return Math.floor(index % 3) * 0.3; // 0s for group 1, 0.3s for group 2, 0.6s for group 3
        // },
        stagger: {
          each: 0.4,
          from: "start"
        }

      })



      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 100),
          scrub: true,
          pin: true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 60, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 60, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 60, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    } else if (window.innerWidth == 440) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 20%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 20,
        color: "#d9d4c5",
        fontSize: 60,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 27%",
          end: "+=100",
          scrub: true,

        }
      });
      gsap.set(".h84gf", {
        y: 0,
        duration: 1,
      });
      tl2.to(".h84gf", {
        x: 20,
        duration: 1,
      });

      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 40%",
          end: "+=160",
          scrub: true,

        },

      })



      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 100),
          scrub: true,
          pin: true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 60, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 60, duration: 1 }, "<");
        // if (i < lastPanel) {
        //   tlMain.to(panel, { height: "5vh", y: 60, duration: 1 });
        //   tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        // }
      });
    } else if (window.innerWidth <= 480) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 20%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 30,
        color: "#d9d4c5",
        fontSize: 60,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 27%",
          end: "+=100",
          scrub: true,

        }
      });

      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });
      gsap.set(".h84gf", {
        y: 3,
        duration: 1,
      });
      // const tl3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#newcolum",
      //     start: "top 40%",
      //     end: "+=160",
      //     scrub: true,
      //     // markers:true,
      // });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 35%",
          end: "+=160",
          scrub: true,
          // markers:true,
        },
      })



      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;

      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 100),
          scrub: true,
          pin: true,
          // markers:true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 40, duration: 0.5 });
      tlMain.fromTo('.panel', { y: "102%" }, { y: 35, duration: 1 }, "<");
      // panels.forEach((panel, i) => {
        // let lastPanel = panels.length - 1;
        // tlMain.fromTo(panel, { y: "102%" }, { y: 35, duration: 1 }, "<");
        // if (i < lastPanel) {
        //   tlMain.to(panel, { height: "5vh", y: 35, duration: 1 });
        //   tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        // }
      // });
    } else if (window.innerWidth <= 770) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 25%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 30,
        color: "#d9d4c5",
        fontSize: 60,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 27%",
          end: "+=100",
          scrub: true,

        }
      });

      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });

      // const tl3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#newcolum",
      //     start: "top 40%",
      //     end: "+=160",
      //     scrub: true,
      //     // markers:true,
      //   }

      // });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 30%",
          end: "+=160",
          scrub: true,

        },
      })



      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;

      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 200),
          scrub: true,
          pin: true,
          // markers:true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 80, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "100%" }, { y: 80, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 80, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    } else {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 25%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 0,
        color: "#d9d4c5",
        fontSize: 80,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 12%",
          end: "+=100",
          scrub: true,
        }
      });

      tl2.to(".h84gf", {
        x: 0,
        duration: 1,
      });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#newcolum",
          start: "30% -40%",
          end: "+=160",
          scrub: true,
          // markers:true,
        }
      });

      tl3.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        // ease: "power1.inOut",
        // stagger: {
        //   grid: [2,3],
        //   each: 0.4,
        //   from: "center",
        //   axis: "y",
        //   amount: 1.5
        // }
      });
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;

      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 200),
          scrub: true,
          pin: true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 0, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "100%" }, { y: 0, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 0, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    }
    // if (show) {
    //   console.log(show);
    //   lenis.stop();
    // } else {
    //   console.log(show);
    //   lenis.start();
    // }
    return () => {
      window.removeEventListener("resize", handleResize);
      imageSections.forEach(section => {
        const clickableImages = section.querySelectorAll('.clickable');
        clickableImages.forEach(img => {
          if (img._onClick) {
            img.removeEventListener('click', img._onClick);
            delete img._onClick;
          }
        });
      });
    };

  }, [loading]);
  useEffect(() => {
    const url = new URL(window.location.href);
    const c = url.searchParams.get('tags') || "Karimik";
    fetch('https://yuccabeplanters.chaak.in/api/collection.php?filter='+c).then((res) => res.json())
      .then((result) => {
        setSections(result[0]['product']);
        setFilterData(result[0]['cat']);
        setLoading(true);
      }).catch((err) => {
        setLoading(false);
        alert('Failed to load collections. Please try again later.');
      });


  }, []);
  return (
    <>

      <style>
        {jsdhsjd}
        {`

          body {
            margin: 0;
            padding: 0;
          }
          .navbar {
            background-color: #ffffff;
          }
          section.sliders {
            overflow: hidden;
            position: relative;
          }
          .slider-wrapper {
            display: flex;
            width: 200%;
            
          }
          .slide {
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
            width: 100%;
          }
          .slide span {
            font-size: 2.2rem;
            margin-right: 10px;
          }
          .rotating-svg {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            animation: rotate 4s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .image-section {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
          }
          .left-images {
            height: 100%;
            width: 20%;
            padding: 0;
            margin: 0;
            overflow: hidden;
            position: relative;
          }
          .slider {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            width: 100%;
            transition: transform 0.3s ease;
          }
          .slider img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            cursor: pointer;
            aspect-ratio: 3/4;
            border: none;
          }
          .slider .clickable.active {
            border: 2px solid white;
          }
          .right-image {
            height: 100%;
            padding: 0;
            margin: 0;
          }
          .right-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .row.no-gaps {
            margin: 0;
          }
          .row.no-gaps > * {
            padding: 0;
          }
          @media (max-width: 767.98px) {
            .image-section {
              height: auto;
              flex-direction: column;
              align-items: flex-start;
            }
            .left-images {
              width: 100%;
              height: 616px;
            }
            .slider img {
              width: 50%;
              height: 200px;
              aspect-ratio: 3/4;
            }
            .right-image {
              width: 100%;
            }
            .right-image img {
              width: 300px;
              height: 300px;
            }
          }
          .panel {
            position: absolute;
            top: 26vh;
            left: 0;
            width: 100vw;
            height: 73vh; /* Active panel height */
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            display: block;
            justify-content:space-between; 
            align-items: center;
            padding: 0 20px;
            color: #fff;
            overflow: hidden;
            z-index: 3;
          }

        `}
      </style>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .button-77 {
              width:auto;
              align-items: center;
              appearance: none;
              background-clip: padding-box;
              background-color: initial;
              background-image: none;
              border-style: none;
              box-sizing: border-box;
              color: #fff;
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
              
              .button-77:before,
              .button-77:after {
              border-radius: 80px;
              }
              
              .button-77:before {

                  background: linear-gradient(270deg,#FFFEFE 0%, #D9D4C4 100%);
                  border: 10px solid;
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
              background: linear-gradient(270deg, #D9D4C4 0%, #86857F 100%);
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
              
              .button-77:hover:not(:disabled):after {
              bottom: 0;
              left: 0;
              right: 0;
              top: 0;
              transition-timing-function: ease-in;
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
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div>
              <span>Stone Finishes</span>
            </div>
            <div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/121.jpg" alt="" className="w-100" style={{ height: 80 }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/122.jpg" alt="" className="w-100" style={{ height: 80 }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/123.jpg" alt="" className="w-100" style={{ height: 80 }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/124.jpg" alt="" className="w-100" style={{ height: 80 }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/125.jpg" alt="" className="w-100" style={{ height: 80 }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/126.jpg" alt="" className="w-100" style={{ height: 80 }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/127.jpg" alt="" className="w-100" style={{ height: 80 }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/129.png" alt="" className="w-100" style={{ height: 80 }} />
                </div>

              </div>
            </div>
          </div>
          <div className="pt-3">
            <div>
              <span>Textures</span>
            </div>
            <div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/133.png" alt="" className="w-100" style={{ height: 80 }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/130.png" alt="" className="w-100" style={{ height: 80 }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/132.png" alt="" className="w-100" style={{ height: 80 }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/129.png" alt="" className="w-100" style={{ height: 80 }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/134.png" alt="" className="w-100" style={{ height: 80 }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <img src="/img/stone-finishes/135.png" alt="" className="w-100" style={{ height: 80 }} />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <div>
              <span>Colors</span>
            </div>

            <div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#f8f7f4" }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#d5cab5" }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#c4bfbc" }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#aaaaaa" }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#636363" }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#3a3a3a" }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#694536" }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#667144" }} />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#ffcc34" }} />
                </div>
                <div className="col-6 overflow-hidden">
                  <div className="w-100" style={{ height: 80, backgroundColor: "#d8343c" }} />
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="pb-sm-20" style={{ position: "relative" }}>
        <div className="stack-container">
          <div className="mobile_view_frist_section" style={{ position: "fixed", transform: "translate(0px, 12vh)", zIndex: '2', width: "100%", lineHeight: "1", height: "85px" }}>
            <div className="w-100 d-flex h-100 justify-content-center mobile_view">
              <div className="kdjff" style={{ width: "30%", position: "relative", lineHeight: "1" }}>
                <span className="k8nd8" style={{ position: "absolute", fontSize: "225px", fontWeight: "bold", backgroundColor: "rgb(255, 255, 255)", zIndex: 1 }}>Collections</span>
              </div>
              <div className="sdsss" style={{ overflow: "hidden", width: "fit-content" }}>
                <div className="d-flex gap-2 h84gf" style={{ transform: "translate(-955px, 20px)", position: "relative" }}>
                  {FilterData.map((data) => (
                    <button key={data.Category_ID} className="btn btn_style" data-filter={data.Category_ID}>
                      <div className="btn_icon d-none">
                        <img src="./svg/icon2.svg" className="w-100 btn_icon_1" />
                        <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                      </div>
                      {data.Category_Name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="container-fluid" id="newcolum" style={{ position: "fixed", transform: "translate(0px, 100px)", }}>
              <div className="w-100 h-100" style={{ overflow: "hidden" }}>
                <div className="row px-2">
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/6.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/7.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/8.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/6.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/7.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/8.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-section">
            <div className="articles_header w-100 text-center">
              <section className="sliders">
                <div className="slider-wrapper">
                  <AnimatedTypingText />
                </div>
              </section>
            </div>

          </div>
          <div className="panels">
            {sections.map(({ Entry_ID, Product_Name, Product_Subtitle, Product_Description, Sizes_Image_Link, Category_ID, Images }) => (
            <div className={"panel p-0 panel" + Entry_ID} key={Entry_ID} data-category={Category_ID}>
              <div className="container-fluid">
                <div className="row px-1">
                  <div className="panel-body col-12 panel-image" style={{ paddingTop: "25px" }}>
                    <div className="d-flex justify-content-between two-colum-div">
                      <div className="panel-text-div col-lg-6 col-md-5 justify-content-start">
                        <div className="d-flex flex-column" style={{ fontFamily: '"Poppins", sans-serif' }}>
                          <span className="panel-title" style={{ color: "#000", fontWeight: "700", fontSize: "50px", lineHeight: 0.9 }}>{Product_Name}</span>
                          <span className="panel-subtitle" style={{ color: "rgb(118 118 118)", fontSize: "25px", fontStyle: "italic", }}>{Product_Subtitle}</span>
                          <span className="panel-description pt-3" style={{ color: "#000", fontSize: "20px", fontWeight: "200" }}>{Product_Description}</span>
                        </div>
                        <div className="pt-4 col-12">
                          {Sizes_Image_Link ? (
                            <img src={Sizes_Image_Link} alt="" className="w-100" />
                          ) : null}
                        </div>
                        <div className="col-12 pt-5">
                          <div className="d-flex justify-content-start">
                            {/* <Button variant="primary"  className="new_style fs-5"></Button> */}
                            <a className="button-77 poppins-regular " onClick={handleShow} role="button" href='#'>
                              Explore Variants
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="panel-image-div col-lg-5 col-md-7 overflow-hidden">
                        <div className="image-section" >
                          <div className="row h-100 no-gaps justify-content-center w-100 flex-column">

                            <div className="col-lg-10 right-image">
                              {}
                              <LazyLoadImage className="main-image" src={Images[0].Image_Link} alt="Main Image" />
                            </div>
                            <div className=" left-images">
                              <div className="slider">
                                <Image key={Entry_ID} imageData={Images} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
      <Footer />
    </>
  );
};


export default Collections;
