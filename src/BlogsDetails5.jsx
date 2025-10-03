import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import css from './BlogsDetails.css?raw';

export default function BlogsDetails5() {
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
                                            Balcony Makeover Ideas Using Yuccabe’s Modern Planter Designs
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
                                    <span>Devansh Kohli</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>26 February 2025</span>
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
                                        

                                        <div className="blog-details-left-content">
                                            <p>
                                                If you’ve been overlooking your balcony, you’re missing out on one of the most versatile and mood-shifting spaces in your home. With just a few intentional upgrades—starting with thoughtfully designed planters—you can transform your balcony into a green oasis, a reading nook, a morning chai zone, or a full-blown style statement.
                                                At Yuccabe, we believe that even a 3x5 space has design potential. All you need is the right combination of shape, size, placement, and plants—and your balcony makeover begins.
                                            </p>
                                            <p>
                                                Gone are the days when planters were an afterthought—tucked in corners or hidden on balconies. Today, they are carefully chosen, handcrafted, and proudly displayed in living rooms, foyers, lounges, and terraces. The shift is not accidental. It's part of a growing movement toward organic luxury, where nature, design, and craftsmanship come together seamlessly.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 Go Vertical to Maximize Space</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                For smaller balconies, vertical space is gold. Use Yuccabe’s tall, slim FRP planters along the walls or railing to add height and greenery without sacrificing floor space. You can also create a vertical garden using stackable or wall-mounted planters with trailing greens like money plant, ivy, or philodendron.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪟 Define Zones with Planters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                If you have a slightly larger balcony, divide it into soft zones—like a seating area and a plant corner—using planters as natural partitions. Our dual-tone or geometric fiberglass planters are great for this; they’re visually striking and help section the space without making it feel cramped.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪴 Layer Heights for a Lush Look</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Create a balcony-scape by mixing tall taper planters with short bowls and medium-height pots. This adds visual rhythm and avoids a flat, one-dimensional layout. Go with a theme—like all matte white or earth tones—to keep the look cohesive yet dynamic.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪑 Pair Planters with Lounge Vibes</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                A cozy chair, a small table, and a couple of planters—boom, you’ve got a weekend-ready reading corner. Yuccabe’s textured ceramic or rattan-wrapped planters bring softness and a warm natural feel that pairs beautifully with cane, wood, or fabric seating.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🍃 Add Life to Railings</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Use railing-mounted planters or place slender pots right against the edge to draw attention to the balcony boundary. This creates a subtle frame around the view and gives the illusion of more depth. Bonus: herbs like basil, mint, or lemongrass work great here!
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪄 Use Planters as Art</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Some of Yuccabe’s signature designer pots are made to be seen. Use one sculptural piece as a visual anchor. It could be a ribbed terracotta pot, a glossy ceramic dome, or a custom angular design—let it stand tall and do the talking.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">💡 Play with Light + Planters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Add soft lighting like fairy lights or lanterns near or inside your planter layout. Light bouncing off textured finishes like concrete or matte ceramic adds dimension and transforms your balcony at night.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌸 Match the Mood with the Material</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <ul className='px-5'>
                                                <li className='py-1'><b>For a minimal, modern balcony:</b> Go with FRP in monochromes</li>
                                                <li className='py-1'><b>For an earthy, boho vibe:</b> Use terracotta, concrete, and rattan textures</li>
                                                <li className='py-1'><b>For a luxe city escape:</b> Try metallics, glossy ceramics, and bold shapes</li>
                                           </ul>
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
                                            A balcony makeover doesn’t require breaking walls—it just needs the right elements placed with intent. With Yuccabe’s modern planter designs, you don’t just add greenery—you add style, warmth, and a touch of you.
                                        </p>
                                        <p>
                                            So take that balcony you’ve been ignoring and turn it into your favorite spot.
                                        </p>
                                        <p> Small space. Big transformation. One planter at a time.</p>
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
    )
}
