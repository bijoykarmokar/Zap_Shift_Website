import React from 'react';
import Banner from './Banner';
import FeatureCards from './FeatureCards';
import OurServices from './OurServices';
import LogoSlider from './LogoSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureCards></FeatureCards>
            <OurServices></OurServices>
            <LogoSlider></LogoSlider>
        </div>
    );
};

export default Home;