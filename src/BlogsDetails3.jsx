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
                                            The Ultimate Guide to Choosing the Right Planter for Every Space
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
                                    <span>Kabir Malhotra</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>17 March 2025</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>8 min</span>
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
                                       
                                        <div className="blog-details-left-content">
                                            <p>
                                                When it comes to styling a space with greenery, the planter is just as important as the plant itself. A well-chosen planter doesn’t just hold the plant—it frames it, highlights it, and helps it thrive.
                                            </p>
                                            <p>
                                                But with so many styles, sizes, and finishes out there, how do you choose the right one? Here’s a breakdown to help you find the perfect planter for every corner of your home or outdoor area.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🏠 Living Room – Statement & Style</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                This is where your planter can truly shine. Choose something bold and sculptural—like a tall FRP planter in matte black or ivory white. It should complement your furniture and act like an art piece on its own. Use it for leafy plants like monstera, fiddle leaf fig, or rubber plant.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Go large and dramatic. The living room is for showcasing.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🛏️ Bedroom – Calm & Minimal</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                The bedroom is all about rest. Stick with soft colors like beige, sage green, or blush-toned ceramic planters. Choose smaller sizes for bedside tables or corners and go with calming plants like snake plant or peace lily.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Low-maintenance plants with air-purifying properties pair best with subtle, minimal planters.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🍽️ Dining Area – Balance & Elegance</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Dining spaces benefit from symmetry and mood. Use mid-sized planters with matching finishes on either side of a buffet or console. Choose elegant finishes—like glossy ceramics or dual-tone metals—and soft foliage like ferns or pothos.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Avoid spiky or overpowering plants here; go for flowy and graceful forms.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">💻 Work Desk – Focus & Freshness</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Small table-top planters made from ceramic or concrete are perfect for your work desk. They don’t just add charm—they keep you grounded. Choose small greens like ZZ plant, jade, or mini succulents.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Keep it small, clean, and easy to maintain—clutter kills focus.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪴 Balcony or Terrace – Bold & Weatherproof</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Outdoor spaces need durability. Go for FRP or concrete planters that can handle sunlight, rain, and temperature changes. Use a mix of heights to add visual rhythm. Plants like palms, hibiscus, or bamboo fit beautifully.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Choose planters with proper drainage and UV resistance for long-term use.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🛁 Bathroom – Humidity-Loving & Compact</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Surprisingly, bathrooms are great for plants! Use compact ceramic planters that match your bathroom palette. Place them on window sills or open shelves. Good plant choices include ferns, aloe vera, or pothos.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Use water-resistant materials and place them away from direct splash zones.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🚪 Entryway – First Impression Planters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            The entrance sets the tone. Use tall, symmetrical planters in pairs on either side of your door or console. Go for neutral tones or something bold if your door is plain. Plants like areca palm or rubber plants work well here.
                                            </p>
                                            <p>
                                                <b>Tip</b>: This is a great space to go custom with your planter—get something that reflects your personality or brand.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 Material Matters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <ul>
                                                <li>
                                                    <b>FRP (Fibre Reinforced Plastic)</b>: Lightweight, durable, weatherproof—great for all spaces, especially outdoors.
                                                </li>
                                                <li><b>Ceramic</b>: Elegant, premium, and best for indoor use.</li>
                                                <li><b>Concrete</b>: Raw, minimal, and ideal for modern or industrial themes.</li>
                                                <li><b>Terracotta</b>: Warm and earthy, great for rustic or bohemian styles.</li>
                                                <li><b>Metal & Rattan Mixes</b>: Trendy, stylish, and good for contemporary interiors.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>


                                <div
                                    className="blog-details-thumb-box tp_fade_bottom "
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
                                    <div
                                        className="blog-details-left-content tp_fade_bottom  py-5" 
                                        style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            opacity: 1,
                                            transform: "translate(0px, 0px)"
                                        }}
                                    >
                                        <h4 className="blog-details-left-title">
                                            🎯 Final Thoughts
                                        </h4>
                                        <p>
                                            The right planter doesn’t just serve the plant—it serves the space, the vibe, and you. With thoughtful selection, your planters can elevate your interiors, define your outdoors, and reflect your taste in the subtlest yet most powerful ways.
                                        </p>
                                        <p>
                                            At Yuccabe, we help you find planters that don’t just fit—but feel right. And if we can’t find one, we make it for you.
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
