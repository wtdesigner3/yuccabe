import React, { useRef } from 'react';

const VideoBox = ({ link }) => {
  return (
    // <div className="video-box">

    // </div>
    <video muted loop playsInline autoPlay className='w-100 h-100 object-fit-cover'>
      <source
        src={link}
        type="video/mp4"
      />
      Your browser does not support HTML5 video.
    </video>
  );
};

const VideoReelsSection = () => {
  return (
    <>
      {/* Inline styles */}
      <style>
        {`
                .video-row {
                  display: flex;
                  flex: 1;
                  gap: 10px;
                  margin: 20px auto;
                  padding: 0px 10px;
                  
                }
                .video-row video {
                  border: 1px dashed #000;
                  width: 16.2%;
                  height: 100%;
                  object-fit: cover;
                  display: block;
                  transition: transform 0.3s ease;
                  cursor: pointer;
                  border-radius: 15px;
                }
                .video-row a:hover {
                  transform: scale(1.1);
                  border:none;
                  z-index:9;
                }
                @media (max-width:  1024px) {
                  .video-row {
                    padding: 0px 20px;
                  }
                  .video-row a{
                    width: 16%;
                  } 
                }
                @media (max-width: 768px) {
                  .update-card{
                    padding:0px!important;
                  }
                  .video-row a{
                    width: 24%;
                  }
                  .video-container {
                    overflow: hidden;
                    padding: 0px 0px;
                  }
                  .video-row::-webkit-scrollbar {
                    display:none;
                  }
                  .video-row{
                    overflow:auto;
                  }
                }
                @media (max-width: 480px) {
                  .video-row video:hover {
                    transform: scale(1);
                  }
                  .video-row {
                    padding: 0px 20px;
                  }
                  .video-row  a{
                    width: 50%;
                  }
                }
            `}
      </style>
      <section className='video-container'>
        <div className="video-row">
          <a href="https://www.instagram.com/reel/DITt5O5yBzX/?igsh=MW5iNjY4c21nbzNwYQ==" target='_blank'>
            <VideoBox link="/videos/1.mp4" />
          </a>
          <a href="https://www.instagram.com/reel/DIButeZyOa5/?igsh=NGtmaXV1ZmZ0ZG0z" target='_blank'>
            <VideoBox link="/videos/2.mp4" />
          </a>
          <a href="https://www.instagram.com/reel/DH_IVzfSHLb/?igsh=cTE2cnZybmo1cDF0" target='_blank'>
            <VideoBox link="/videos/3.mp4" />
          </a>
          <a href="https://www.instagram.com/reel/DHlTMc8SEsK/?igsh=d2Z3Z2F5a2luM3Bu" target='_blank'>
            <VideoBox link="/videos/4.mp4" />
          </a>
          <a href="https://www.instagram.com/reel/DHTIFefyQhV/?igsh=dXJza2R6aGppemJ6" target='_blank'>
            <VideoBox link="/videos/5.mp4" />
          </a>
          <a href="https://www.instagram.com/reel/DHQjST0yCn3/?igsh=MXVub3l0c3VkbjVwbg==" target='_blank'>
            <VideoBox link="/videos/6.mp4" />
          </a>

        </div>
      </section>
    </>
  );
};

export default VideoReelsSection;