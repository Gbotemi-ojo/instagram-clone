import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../homepage/Homepage.css"
import { Carousel } from 'react-responsive-carousel';
import img from '../../assets/Homepage/search-icon.svg'
import Reel from './reel';
import FeedPost from '../homepage/feedPost';
import vid3 from './vid3.mp4'
function Reels() {
    return (
        <Carousel width={'100%'} emulateTouch={true} useKeyboardArrows={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={false}
            axis='vertical'>
            <Reel vid = {vid3} />
            <Reel vid={vid3} />
            <Reel vid={vid3} />
            <Reel vid={vid3} />
            <Reel vid={vid3} />
        </Carousel>
    )
}

export default Reels