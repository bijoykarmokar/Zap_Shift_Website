import React from 'react';
import Banner from './Banner';
import FeatureCards from './FeatureCards';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureCards></FeatureCards>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;