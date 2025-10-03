import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import css from './BlogsDetails.css?raw';
export default function BlogsDetails1() {

    const [Category, setCategory] = useState([]);
    useEffect(() => {
        // Load random blogs
        fetch('https://yuccabeplanters.chaak.in/api/RandomBlog.php')
            .then((res) => res.json())
            .then((data) => {
                setCategory(data);
            })
            .catch((err) => {
                console.error('API Error:', err);
            });

        // Simulated blog data
    }, []);


    return (
        <>
            <style>{css}</style>
            <div className="blog-details-area blog-details-without-sidebar">
                <div className="blog-details-without-sidebar p-relative d-flex align-items-end pt-170 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blog-details-content z-index-5">
                                    <span className="blog-details-meta text-black">Creative</span>
                                    <h4
                                        className="blog-details-title tp-text-black tp-char-animation"
                                        style={{ perspective: 300 }}
                                    >
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                        Terrace Garden Ideas: How to Style Your Outdoors with Yuccabe Planters
                                        </div>
                                       
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-1800 ">
                    <div className="blog-details-thumb-wrap">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>Ira Sethi</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>12 February 2025</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>7 min</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blog-details-thumb">
                                    <img
                                        className="w-100"
                                        data-speed=".8"
                                        src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details-without-sidebar/blog-details-3.jpg"
                                        alt=""
                                        style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(0px, 0px)",
                                            willChange: "transform"
                                        }}
                                        data-lag={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="postbox__wrapper">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        {/* 1. Matte Black FRP Cylindrical Planter */}
                                        {/* <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 1. Matte Black FRP Cylindrical Planter</h4>
                                        </div> */}
                                        <div className="blog-details-left-content">
                                            <p>
                                                <b>Terrace Garden Ideas</b>: How to Style Your Outdoors with Yuccabe Planters Start by creating natural zones. A few tall planters placed intentionally can softly separate your seating area from your greens without blocking light or view. If you enjoy hosting, try adding a dining nook with planters on either side that offer both privacy and personality.
                                            </p>
                                            <p>
                                                For smaller terraces, vertical gardening is your best friend. Yuccabe’s wall-mounted and sleek FRP planters can help you build a green wall that adds visual height and saves floor space. You’ll be surprised how even a single wall of cascading greens can change the mood of your terrace.
                                            </p>
                                            <p>
                                                Mixing planter heights and materials is another simple but effective trick. Pair a wide, low bowl planter with a tall, slim one in a contrasting finish. For instance, a concrete-textured pot next to a glossy ceramic creates depth and keeps the layout visually interesting.
                                            </p>
                                            <p>
                                                Don’t ignore the corners—they often hold the most potential. A sculptural terracotta planter with a large-leaf plant like monstera can instantly soften a sharp edge. Add a floor lantern next to it, and you’ve got a cozy little evening reading corner.
                                            </p>
                                            <p>
                                                Movement matters too. Incorporating grasses or hanging plants introduces softness and rhythm. Pampas grass, spider plants, or even ivy can dance in the wind, adding a soothing element to the space.
                                            </p>
                                            <p>
                                            If you have the room, design a plant-led lounge area. Combine low seating with oversized planters behind or around it. Think of it as a frame of green that wraps around your unwind zone. It’s ideal for slow mornings or late-night conversations.
                                            </p>
                                            <p>
                                                Want to keep things practical? Grow your own herbs. Edible greens like basil, mint, or rosemary thrive in Yuccabe’s deep, breathable planters. Place them close to your kitchen entrance for convenience and a fresh burst of scent every time you pass.
                                            </p>
                                            <p>
                                                Finally, customization is key. No two terraces are the same—your style, sunlight, layout, and preferences all play a role. Yuccabe offers custom planter solutions that fit perfectly into your space, visually and functionally. Whether it’s a specific material, height, or finish, we help you get exactly what your space needs.
                                            </p>
                                        </div>

                                        
                                    </div>

                                    
                                </div>
                                <div className="blog-details-thumb-box tp_fade_bottom "
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="blog-details-thumb">
                                                <img
                                                    className="mb-20"
                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details-without-sidebar/blog-details-1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="blog-details-thumb">
                                                <img
                                                    className="mb-20"
                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details-without-sidebar/blog-details-2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="blog-details-left-content tp_fade_bottom  py-5" 
                                        style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            opacity: 1,
                                            transform: "translate(0px, 0px)"
                                        }}
                                    >
                                        <h4 className="blog-details-left-title">
                                            ✨ Final Thoughts
                                        </h4>
                                        <p>
                                            Your terrace deserves to be more than just a forgotten open patch. With the right styling and the right planters, it can become your favorite space in the entire home. Whether you want it calm, cozy, bold, or functional, Yuccabe’s planters are designed to help you build a terrace that reflects your lifestyle—with intention, elegance, and natural charm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="blog-details-realated-area grey-bg-2 pt-90 pb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="blog-details-realated-title-box text-center mb-50">
                                <h3 className="blog-details-realated-title">Related posts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {Category.map((data) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-50" key={data.Entry_ID}>
                                <div className="tp-blog-item">
                                    <div className="tp-blog-thumb fix p-relative">
                                        <img src={data.Main_Image} alt="" />
                                        <div className="tp-blog-meta">
                                            <span>{data.Blog_Post_Date}. {data.Blog_Post_Month}. {data.Blog_Post_Year}</span>
                                        </div>
                                    </div>
                                    <div className="tp-blog-content">
                                        <span>{data.Category}</span>
                                        <h4 className="tp-blog-title-sm fs-4" style={{ lineHeight: 1.1 }}>
                                            <a href={data.Blog_Link}>{data.Blog_Title}</a>
                                        </h4>
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
}
