import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  const images = [
    "https://www.hindustantimes.com/ht-img/img/2025/10/22/1600x900/Kantara_Chapter_1_English_1761125094221_1761125104571.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/et00387652-umahydbxry-landscape.jpg",
    "https://assets.thehansindia.com/h-upload/2021/03/21/1045763-salaga.webp",
    "https://sund-images.sunnxt.com/8116/1920x1080_81c455ac-5bbe-48bb-b981-d9b6bacea919.jpg",
    "https://ss-i.thgim.com/public/incoming/jo7sva/article69810184.ece/alternates/LANDSCAPE_1200/ENG%20vs%20IND%20Blog%204.png",
    "https://thebridge.in/h-upload/2022/01/23/22299-live-blog-bfc-vs-fcg.jpg"
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}