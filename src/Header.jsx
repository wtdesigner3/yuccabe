import React, { useEffect, useState, useRef } from 'react';

import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { gsap, ScrollTrigger } from "gsap/all";
import './header.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();
  const header = useRef(null);
  const cursor = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const expand = "md";
  window.addEventListener("mousemove", (e) => {
    gsap.to('.cursor', {
      duration: 0,
      x: e.clientX,
      y: e.clientY,
    });
    // cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })
  if(location.pathname == '/'){
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
      let triggerPoint = window.innerHeight * 0.9; // 200vh
      if (scrollPosition >= triggerPoint) {
        document.getElementById('header').classList.remove("d-none");
      } else {
        document.getElementById('header').classList.add("d-none");
      }
    });
  }
  return (
    <>
      <div id="form-alert" className="alert d-none" role="alert" style={{
        position: "fixed",
        top: "10vh",
        color: "#000",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: 13
      }}></div>
      <div className='cursor' ref={cursor}></div>
      <div className={`navbar-container position-fixed z-index-99 w-100 ${location.pathname == '/' ? 'd-none' : ''}`} id="header" ref={header}>
        <Navbar data-bs-theme="light">
          <Container fluid className="navbar-container-padding">
            <Navbar.Brand href="/" className="menu-logos" >
              <img src="/img/YP-Logo-black-.png" alt="Logo" width={'100%'} />
            </Navbar.Brand>
            <Navbar.Toggle onClick={handleShow}/>
            <Nav className="w-100 d-none justify-content-end  d-lg-flex" defaultActiveKey={location.pathname}  style={{gap:10}}>
              <Nav.Link href="/" >
               <span className='dot'></span> 
               <span className="menu-title"> Home</span>
              </Nav.Link>
              <Nav.Link href="/explore" >
                <span className='dot'></span> 
                <span className="menu-title"> Explore</span>
              </Nav.Link>
              <Nav.Link href="/our-products" >
                <span className='dot'></span> 
                <span className="menu-title"> Our Products</span>
              </Nav.Link>
              <Nav.Link href="/services" >
                <span className='dot'></span> 
                <span className="menu-title"> Services</span>
              </Nav.Link>
              <Nav.Link href="/projects" >
                <span className='dot'></span> 
                <span className="menu-title"> Projects</span>
              </Nav.Link>
              <Nav.Link href="/about-us" >
                <span className='dot'></span> 
                <span className="menu-title"> About</span>
              </Nav.Link>
              <Nav.Link href="/blogs" >
                <span className='dot'></span> 
                <span className="menu-title"> Blogs</span>
              </Nav.Link>
              <Nav.Link href="/contact" >
                <span className='dot'></span> 
                <span className="menu-title"> Contact</span>
              </Nav.Link>
              <Nav.Link href="https://yuccabeitalia.com/collections/yuccabe-italia" target="_blank">
                <span className="menu-title"> Shop Now</span>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className=" flex-grow-1 pe-3 flex-column mobile-navbar" defaultActiveKey={location.pathname}>
            <Nav.Link href="/" >
              <span className="menu-title"> Home</span>
            </Nav.Link>
            <Nav.Link href="/explore" >
              <span className="menu-title"> Explore</span>
            </Nav.Link>
            <Nav.Link href="/our-products" >
              <span className="menu-title"> Our Products</span>
            </Nav.Link>
            <Nav.Link href="/services" >
              <span className="menu-title"> Services</span>
            </Nav.Link>
            <Nav.Link href="/projects" >
              <span className="menu-title"> Projects</span>
            </Nav.Link>
            <Nav.Link href="/about-us" >
              <span className="menu-title"> About</span>
            </Nav.Link>
            <Nav.Link href="/blogs" >
              <span className="menu-title"> Blogs</span>
            </Nav.Link>
            <Nav.Link href="/contact" >
              <span className="menu-title"> Contact</span>
            </Nav.Link>
            <Nav.Link href="https://yuccabeitalia.com/collections/yuccabe-italia" target="_blank">
              <span className="menu-title"> Shop Now</span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      
      <div className='w-100' style={{height: location.pathname == '/' ? '0px' : location.pathname == '/work' ? '70px' : location.pathname == '/explore' ? '70px': location.pathname == '/our-products' ? '100px':  location.pathname == '/our-products1' ? '100px': '0px'}}></div>

      <Outlet />
    </>
  );
  
};
export default Header;