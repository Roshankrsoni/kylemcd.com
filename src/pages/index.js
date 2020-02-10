import React from 'react';
import Helmet from 'react-helmet';
import {
    HomeHero,
    HomePostList,
    Default
} from '../components';

import {
    TopContainer
} from '../components/PageStyles/HomeStyles';

const Homepage = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Kyle McDonald</title>
                <meta name="description" contnet="Personal site for the Chicago-based Software Engineer"/>
            </Helmet>
            <TopContainer>
                <HomeHero/>
                <HomePostList/>
            </TopContainer>
        </Default>
    );
}

export default Homepage;
