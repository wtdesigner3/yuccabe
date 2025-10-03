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
                                            How Plants Improve Mental Health and Why Your Home Needs More Greenery
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
                                    <span>Rhea Kapoor</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>21 January 2025</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>5 min</span>
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
                                                In a world filled with screens, deadlines, and noise, the idea of peace has become a luxury. But what if that calm wasn’t far away? What if it could start with something as simple and powerful as a plant?
                                            </p>
                                            <p>
                                                Studies have consistently shown that introducing plants into our indoor spaces can significantly impact mental health. The presence of greenery can reduce anxiety, lower blood pressure, and even improve focus and memory. Whether it’s a leafy monstera by your desk or a line of small herbs on your kitchen shelf, these living elements offer real, measurable calm.
                                            </p>
                                            <p>
                                                Plants provide a sense of connection to nature—a grounding force that reminds us to breathe, slow down, and reconnect. Their presence isn’t just aesthetic; it’s therapeutic. Watching something grow, thrive, and evolve in your care can quietly shift your mindset from stress to serenity.
                                            </p>
                                            <p>
                                                Beyond psychological benefits, there’s a biological connection too. Plants help purify indoor air, reduce toxins, and maintain better humidity levels—creating an environment that’s not just prettier but healthier. That improved air quality can mean better sleep, fewer headaches, and clearer thinking.
                                            </p>
                                            <p>
                                                The beauty of this green therapy is how easily it fits into your life. You don’t need a sprawling garden. A few carefully placed planters—on your windowsill, shelf, or entryway—can make a remarkable difference. Choose calming varieties like lavender, aloe vera, or peace lily for added sensory comfort.
                                            </p>
                                            <p>
                                                At Yuccabe, we believe that planters aren’t just accessories—they’re vessels of wellbeing. Our designs are crafted not only to elevate interiors but to help you bring intentional calm into your life. Whether it’s a meditative corner, a plant-lined work desk, or simply one statement planter by the bed, we help you build space that breathes back into you.
                                            </p>
                                            <p>
                                                Greenery isn’t a luxury—it’s a need. And in 2025, mental health is just as much about the space you live in as it is about your thoughts. More plants mean more peace, and your home deserves that harmony.
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
                                        ✨ Final Thoughts
                                    </h4>
                                    <p>
                                    Your home should feel like a retreat—not a reminder of rush. Adding plants isn’t about decor, it’s about care—both for your space and yourself. Start small, go green, and let nature do the healing it’s always been meant to do.
                                    </p>
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
