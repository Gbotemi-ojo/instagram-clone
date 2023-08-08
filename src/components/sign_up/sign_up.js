import React, { useState } from 'react';
import googleplayImage from '../../assets/sign_up/googleplay.png';
import microsoftImage from '../../assets/sign_up/microsoft.png';
import screenshot1 from '../../assets/sign_up/screenshot1.png';
import screenshot2 from '../../assets/sign_up/screenshot2.png';
import screenshot3 from '../../assets/sign_up/screenshot3.png';
import screenshot4 from '../../assets/sign_up/screenshot4.png';
import '../sign_in/sign_in.css';
function SignUp() {
    const [currentImg, setCurrentImg] = useState(screenshot2);
    const [imageIndex, setImageIndex] = useState(0);
    const demoImages = [screenshot1, screenshot2, screenshot3, screenshot4];
    const toggle_password_visibility = () => { }
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
        console.log(imageIndex);
    }
    handleImageIndex();
    // const frontImageStyles = {
    //     'backgroundImage': `url(${currentImg})`,
    //     'backgroundPosition': 'center',
    //     'backgroundRepeat': 'no-repeat',
    //     'backgroundSize': 'auto 65vh',
    // }
    // const backImageStyles = {
    //     'backgroundImage': `url(${[demoImages[0]]})`,
    //     'backgroundPosition': 'center',
    //     'backgroundRepeat': 'no-repeat',
    //     'backgroundSize': 'auto 65vh', 
    // }
    return (
        <section className='sign-in-page-container'>
            <div className='phone-templates-container'>
                <div className='phone-template-back'>
                    <img src={screenshot1} />
                </div>
                <div className='phone-template-front'>
                    <img src={currentImg} />
                </div>
            </div>
            <div className='sign_up_form_container'>
                <div className='sign-in-container-top'>
                    <div className='insta-logo'>Instagram</div>
                    <div>Sign up to see photos and videos from your friends.</div>
                    <button>Log In with Facebook</button>
                    <div>OR</div>
                    <div className='form_container'>
                        <form action="" className='sign_up_form'>
                            <input type="text" placeholder='Mobile Number'/>
                            <input type="text" placeholder='Full Name'/>
                            <input type="text" placeholder='Username'/>
                            <input type="text" placeholder='password'/>
                        </form>
                    </div>
                    <div>
                        People who use our service may have uploaded your contact information to Instagram. Learn More
                    </div>
                    <div>
                        By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                    </div>
                    <button>Sign Up</button>
                </div>
                <div className='sign-in-container-bottom'>Don't have an account? <a href=""> Sign up</a></div>
                <div className='get-the-app-text'>Get the app</div>
                <div className='sign-in-btns-container'>
                    <img src={googleplayImage} className='googleBtn' />
                    <img src={microsoftImage} className='microsoftBtn' />
                </div>
            </div>
        </section>
    )
}
export default SignUp;