import React,{ useState }  from "react";
import css from "./ResponsiveImageHoverEffect.css?raw";




const ResponsiveImageHoverEffect = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Array of image sources
    const images = [
      "/videos/3770018-hd_1920_1080_25fps.mp4",
      "/videos/10614143-hd_2560_1440_30fps.mp4",
      "/videos/10614143-hd_2560_1440_30fps.mp4"
    ];
  return (
    <>
    <style>{css}</style>
      <div className="main-containers-w-100">
        <div className="containers px-2 py-3">
        {images.map((src, index) => (
            <div
            key={index}
            className={`box ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            >
            <video src={src} alt={`Image ${index + 1}`}  autoPlay muted loop playsInline controls={false} />
            </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default ResponsiveImageHoverEffect;