import React, { useState } from 'react';
import phoneTemplateImage from '../images/sign_up/phone-template.png';
import googleplayImage from '../images/sign_up/googleplay.png';
import microsoftImage from '../images/sign_up/microsoft.png';
import screenshot1 from '../images/sign_up/screenshot1.png';
import screenshot2 from '../images/sign_up/screenshot2.png';
import screenshot3 from '../images/sign_up/screenshot3.png';
import screenshot4 from '../images/sign_up/screenshot4.png';
function SignIn() {
    const [currentImg,setCurrentImg] = useState(screenshot2);
    const [imageClass, setImageClass] = useState('phone-template-front');
    const [imageIndex,setImageIndex] = useState(0);
    const demoImages = [screenshot1,screenshot2,screenshot3,screenshot4];
    const handleImageIndex = ()=>{
        setTimeout(() => {
            if (imageIndex === (demoImages.length - 1)) {
                setImageIndex(0);
                setCurrentImg(demoImages[imageIndex]);
                setImageClass('phone-template-front blur-out');
            }
            else{
                setImageIndex(imageIndex + 1);
                setCurrentImg(demoImages[imageIndex]);
                setImageClass('phone-template-front blur-out');
            }
        }, 4000);
        console.log(imageIndex);
    }
    handleImageIndex()
    const frontImageStyles = {
        'backgroundImage': `url(${currentImg})`,
        'backgroundPosition': 'center',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'auto 65vh',
    }
    const backImageStyles = {
        'backgroundImage': `url(${[demoImages[0]]})`,
        'backgroundPosition': 'center',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'auto 65vh', 
    }
    return (
        <section className='sign-in-page-container'>
            <div className='phone-template-back'>
                <img src={phoneTemplateImage} style={backImageStyles} className='phone-template-back'/>
            </div>
            <div className='phone-template-front'>
                <img src={phoneTemplateImage} className='phone-template-front' style={frontImageStyles} />
            </div>
            <div className='sign-in-container'>
                <div className='sign-in-container-top'>
                    <div className='insta-logo'>Instagram</div>
                    <div className='form-container'>
                        <div className='input'>
                            <input className='userName-input' placeholder='phone-number,username or email'/>
                            <input type='password' className='password-input' placeholder='password'/>
                            <button className='login-btn'>Log In</button>
                            <div className='sign-up-breaker'>   __________OR__________</div>
                        </div>
                        <div className='forgot-password-container'>
                            <a href='po'>Log in with facebook?</a>
                            <a href='pop'>Forgot password?</a>
                        </div>
                    </div>
                </div>
                    <div className='sign-in-container-bottom'>Don't have an account? Sign up</div>
                <div className='get-the-app-text'>Get the app</div>
                <div>
                    <img src={googleplayImage} className='googleBtn' />
                    <img src={microsoftImage} className='microsoftBtn' />
                </div>
            </div>
        </section>
    )
}
export default SignIn
