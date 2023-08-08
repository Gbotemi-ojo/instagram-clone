import React from 'react';
import screenshot1 from '../../assets/sign_up/screenshot1.png';
import screenshot2 from '../../assets/sign_up/screenshot2.png';
import screenshot3 from '../../assets/sign_up/screenshot3.png';
import screenshot4 from '../../assets/sign_up/screenshot4.png';
import { useState } from 'react';
function PhoneTemplateContainer() {
    const [currentImg, setCurrentImg] = useState(screenshot2);
    const [imageIndex, setImageIndex] = useState(0);
    const demoImages = [screenshot1, screenshot2, screenshot3, screenshot4];
    const handleImageIndex = () => {
        setTimeout(() => {
            if (imageIndex === (demoImages.length - 1)) {
                setImageIndex(0);
                setCurrentImg(demoImages[imageIndex]);
            }
            else {
                setImageIndex(imageIndex + 1);
                setCurrentImg(demoImages[imageIndex]);
            }
        }, 4000);
    }
    handleImageIndex();
    return (
        <div className='phone-templates-container'>
            <div className='phone-template-back'>
                <img src={screenshot1} />
            </div>
            <div className='phone-template-front'>
                <img src={currentImg} />
            </div>
        </div>
    )
}

export default PhoneTemplateContainer