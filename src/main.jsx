import React, {lazy, useEffect, useLayoutEffect, useRef,} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import Lenis from "./LenisWrapper";
import Header from './Header';
const App = lazy(() => import('./App'));
const Collections = lazy(() => import('./Collections'));
const CollectionsMobile = lazy(() => import('./CollectionsMobile'));
const Collections1 = lazy(() => import('./Collections1'));
const Explore = lazy(() => import('./Explore'));
const Services = lazy(() => import('./Services'));
const ContactUs = lazy(() => import('./Contact-us'));
const AboutUs = lazy(() => import('./AboutUs'));
const Blogs = lazy(() => import('./Blogs'));
const BlogsDetails = lazy(() => import('./BlogsDetails'));
const BlogsDetails1 = lazy(() => import('./BlogsDetails1'));
const BlogsDetails2 = lazy(() => import('./BlogsDetails2'));
const BlogsDetails3 = lazy(() => import('./BlogsDetails3'));
const BlogsDetails4 = lazy(() => import('./BlogsDetailss4'));
const BlogsDetails5 = lazy(() => import('./BlogsDetails5'));
const MaxEstate = lazy(() => import('./max-estate'));
const Portfolio = lazy(() => import('./Portfolio'));
const Portfolio1 = lazy(() => import('./Portfolio1'));
const Parliamentofindia = lazy(() => import('./parliament-of-india'));
const Jamnagar = lazy(() => import('./jamnagar'));
const Indiragandhiinternationalairportt1 = lazy(() => import('./indira-gandhi-international-airport-t1'));
const Residentialspace = lazy(() => import('./residential-space'));
const Projects = lazy(() => import('./Projects'));
import NotFound from "./NotFound";

import PageLoadAnimation from './PageLoadAnimation';
const root = document.getElementById("root");
const TitleAndMeta = ({ title, description, children }) => {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);

  return children;
};


const Data = () => {
  // <Lenis />
  return (
    <>
      <PageLoadAnimation>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={
                  <TitleAndMeta
                    title="Yuccabe Planters – Premium Designer Planters for Modern Spaces"
                    description="Discover handcrafted planters that blend style and sustainability. Transform your indoor & outdoor spaces with Yuccabe’s signature designs."
                  >
                    <App />
                  </TitleAndMeta>
                } />
                <Route path="/explore" element={
                  <TitleAndMeta
                    title="Explore Yuccabe – Where Planter Design Meets Imagination"
                    description="Dive into our curated design world. Find planter inspirations, styling ideas, and visual experiences crafted to elevate your space."
                  >
                    <Explore />
                  </TitleAndMeta>
                    
                } />
                <Route path="/services" element={
                  <TitleAndMeta
                    title="Custom Planter Design Services – Style Your Space with Yuccabe"
                    description="From concept to curation, we design your space using customized planter layouts. Book a call and start your green transformation."
                  >
                    <Services />
                  </TitleAndMeta>
                  
                } />
                <Route path="/our-products" element={
                  <TitleAndMeta
                    title="Designer Planters by Yuccabe – FRP, Ceramic, & More"
                    description="Browse our exclusive collection of premium FRP, ceramic, and concrete planters—perfect for every aesthetic and space requirement."
                  >
                    <Collections />
                  </TitleAndMeta>
                } />
                <Route path="/our-products1" element={
                  <TitleAndMeta
                    title="Designer Planters by Yuccabe – FRP, Ceramic, & More"
                    description="Browse our exclusive collection of premium FRP, ceramic, and concrete planters—perfect for every aesthetic and space requirement."
                  >
                    <Collections1 />
                  </TitleAndMeta>
                } />
                <Route path="/about-us" element={
                  <TitleAndMeta
                    title="About Yuccabe – Crafting Planters with Purpose"
                    description="Learn about our journey, philosophy, and commitment to thoughtful design. Yuccabe blends craftsmanship and sustainability since inception."
                  >
                    <AboutUs />
                  </TitleAndMeta>
                } />
                <Route path="/contact" element={
                  <TitleAndMeta
                    title="Contact Yuccabe – Let’s Create Beautiful Spaces Together"
                    description="Have a question or project in mind? Reach out to Yuccabe for product inquiries, collaborations, or custom design consultations."
                  >
                    <ContactUs />
                  </TitleAndMeta>
                } />
                <Route path="/projects" element={
                  <TitleAndMeta
                    title="Yuccabe Projects – Iconic Installations Across India"
                    description="See how Yuccabe has transformed Parliament, airports, homes, and commercial spaces with timeless planter placements and styling."
                  >
                    <Projects />
                  </TitleAndMeta>
                } />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio1" element={<Portfolio1 />} />
                <Route path="/max-estate" element={<MaxEstate />}></Route>
                <Route path="/top-10-stylish-planters-to-elevate-your-home-decor-in-2025" element={<BlogsDetails />} />
                <Route path="/terrace-garden-ideas-how-to-style-your-outdoors-with-yuccabe-planters" element={<BlogsDetails1 />} />
                <Route path="/how-plants-improve-mental-health-and-why-your-home-needs-more-greenery" element={<BlogsDetails2 />} />
                <Route path="/the-ultimate-guide-to-choosing-the-right-planter-for-every-space" element={<BlogsDetails3 />} />
                <Route path="/why-designer-pots-are-the-new-statement-pieces-for-luxury-homes" element={<BlogsDetails4 />} />
                <Route path="/balcony-makeover-ideas-using-yuccabe-s-modern-planter-designs" element={<BlogsDetails5 />} />
                <Route path="/parliament-of-india" element={<Parliamentofindia />} />
                <Route path="/jamnagar" element={<Jamnagar />} />
                <Route path="/indira-gandhi-international-airport-t1" element={<Indiragandhiinternationalairportt1 />} />
                <Route path="/residential-space" element={<Residentialspace />} />
                {/* 🔴 Catch-all route for undefined paths */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            
        </BrowserRouter>
      </PageLoadAnimation>
    </>
  )
}
ReactDOM.createRoot(root).render(<Data />);
