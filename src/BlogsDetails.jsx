import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import css from './BlogsDetails.css?raw';
export default function BlogsDetails() {

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
                                            Top 10 Stylish Planters to Elevate Your Home Decor in 2025
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
                                    <span>Aarav Mehta</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>4 March 2025</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>6 min</span>
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
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 1. Matte Black FRP Cylindrical Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Clean, modern, and endlessly versatile. Matte black finishes are on-trend and make a powerful contrast against lush green foliage.<br/>
                                            Perfect for: Monstera, fiddle leaf fig, or rubber plants in living rooms and home offices.<br/>
                                            Pro tip: Pair with light wooden furniture or marble floors for a bold, monochrome look.
                                            </p>
                                        </div>

                                        {/* 2. Textured Concrete Bowl Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪨 2. Textured Concrete Bowl Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: The raw, industrial finish of concrete adds a rugged yet artistic touch. The bowl shape feels sculptural and inviting.<br/>
                                            Perfect for: Succulent arrangements, snake plants, or bonsai centerpieces on coffee tables or outdoor patios.<br/>
                                            Pro tip: Choose one with a smooth base or metallic rim for a balanced contrast.
                                            </p>
                                        </div>

                                        {/* 3. Glossy Ceramic in Sage Green */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🍃 3. Glossy Ceramic in Sage Green</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Sage green is dominating color trends this year—offering a fresh, calming tone that suits both minimal and eclectic interiors.<br/>
                                            Perfect for: Ferns, peace lilies, or trailing ivy on shelves or bedroom corners.<br/>
                                            Pro tip: Go with a rounded shape for a soft, spa-like ambiance in personal spaces.
                                            </p>
                                        </div>

                                        {/* 4. Dual-Tone Metallic Planter with Stand */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">✨ 4. Dual-Tone Metallic Planter with Stand</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Metallic finishes like bronze, copper, and champagne gold add a hint of luxury, while stands elevate the planter—both literally and visually.<br/>
                                            Perfect for: Statement plants like bird of paradise, areca palm, or rubber plant in lounges and entrances.<br/>
                                            Pro tip: Choose contrasting legs—black or matte gold—for a bolder impact.
                                            </p>
                                        </div>

                                        {/* 5. Sculptural Terracotta Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌾 5. Sculptural Terracotta Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Natural and timeless, terracotta brings an earthy grounding energy to interiors. The sculptural silhouette modernizes this traditional material.<br/>
                                            Perfect for: Cactus, alocasia, or even dried pampas arrangements in boho or rustic-themed spaces.<br/>
                                            Pro tip: Mix with woven textures and linen fabrics for a true nature-inspired setup.
                                            </p>
                                        </div>

                                        {/* 6. FRP Tall Tapered Planter in Ivory White */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🏛 6. FRP Tall Tapered Planter in Ivory White</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Tall and sleek, this planter adds vertical elegance without overwhelming the space. The ivory finish adds a sense of calm and purity.<br/>
                                            Perfect for: Corners, entryways, and narrow passageways with plants like areca palm or dracaena.<br/>
                                            Pro tip: Place in pairs for symmetry near doorways or open living spaces.
                                            </p>
                                        </div>

                                        {/* 7. Geometric Fiberglass Planter in Charcoal */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🔲 7. Geometric Fiberglass Planter in Charcoal</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Geometry is trending in both furniture and decor. This planter’s edgy design and dark charcoal tone offer a perfect modern contrast.<br/>
                                            Perfect for: Low-maintenance plants like ZZ plant or sansevieria in modern or industrial homes.<br/>
                                            Pro tip: Use on stair landings or against concrete walls for high visual impact.
                                            </p>
                                        </div>

                                        {/* 8. Rattan-Wrapped Indoor Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 8. Rattan-Wrapped Indoor Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Rattan brings in warmth, texture, and a natural touch—perfect for cozy homes and organic modern interiors.<br/>
                                            Perfect for: Snake plant, rubber plant, or bamboo palm in bedrooms, sunrooms, or reading corners.<br/>
                                            Pro tip: Blend with soft fabrics, beige tones, and diffused lighting for a serene space.
                                            </p>
                                        </div>

                                        {/* 9. Gloss White Ripple Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">💧 9. Gloss White Ripple Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Gloss finishes reflect light and add elegance, while ripple patterns give subtle texture that plays with depth.<br/>
                                            Perfect for: Orchids, calathea, or philodendron in bathrooms or dressing areas.<br/>
                                            Pro tip: Use in minimal interiors with glass or chrome accents for a soft, upscale effect.
                                            </p>
                                        </div>

                                        {/* 10. Yuccabe Signature Custom Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🛠 10. Yuccabe Signature Custom Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: A custom-designed planter tailored to your space, style, and plant choice ensures the perfect harmony of form and function.<br/>
                                            Perfect for: Literally any room, project, or layout—from residential to hospitality.<br/>
                                            Pro tip: Yuccabe’s team helps you design the planter from scratch—material, shape, finish, and placement included.
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
                                            Planters in 2025 are no longer just pots—they’re functional sculptures that reflect your style, support your plants, and shape the vibe of your home. Whether you’re after bold, luxurious statements or soft, natural textures, there’s a perfect planter waiting to elevate your space.
                                        </p>
                                        <p>
                                            Choose pieces that don’t just fit—but feel right. Let your greens thrive, and let your home breathe design.
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
