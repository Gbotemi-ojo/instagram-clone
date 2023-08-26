import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../homepage/Homepage.css"
import { Carousel } from 'react-responsive-carousel';
import Reel from './reel';
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