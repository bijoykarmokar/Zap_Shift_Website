import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/brands/amazon.png"
import Img2 from "../assets/brands/amazon_vector.png"
import Img3 from "../assets/brands/casio.png"
import Img4 from "../assets/brands/moonstar.png"
import Img5 from "../assets/brands/randstad.png"
import Img6 from "../assets/brands/start-people 1.png"
import Img7 from "../assets/brands/start.png"

const logos = [Img1,Img2,Img3,Img4,Img5,Img6,Img7];

const LogoSlider = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="my-20 py-10">
        <h3 className="text-lg md:text-2xl lg:text-3xl text-center font-bold mb-5 ">We've helped thousands of sales teams</h3>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-10">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 mx-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
