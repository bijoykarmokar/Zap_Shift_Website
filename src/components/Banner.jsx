import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from "../assets/banner/banner1.png";
import Img2 from "../assets/banner/banner2.png";
import Img3 from "../assets/banner/banner3.png";

const Banner = () => {
    return (
        <Carousel className='my-10' showThumbs={false} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src={Img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Banner;