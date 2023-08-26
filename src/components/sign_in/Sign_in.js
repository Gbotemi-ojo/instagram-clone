import React, { useState } from 'react';
import googleplayImage from '../../assets/sign_up/googleplay.png';
import microsoftImage from '../../assets/sign_up/microsoft.png';
import PhoneTemplateContainer from '../common/phone-template-container';
import Button from '../common/button';
import Input from '../common/input';
import './sign_in.css';
function SignIn() {
    const [passwordType, setpasswordType] = useState({
        type: "password",
        text: "show"
    });
    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        if (passwordType.type === 'password') {
            setpasswordType({
                type: "text",
                text: "hide"
            });
        }
        else {
            setpasswordType({
                type: "password",
                text: "show"
            });
        }
    }
    return (
        <section className='sign-in-page-container'>
            <PhoneTemplateContainer />
            <div className='sign-in-container'>
                <div className='sign-in-container-top'>
                    <div className='insta-logo'>Instagram</div>
                    <div className='form-container'>
                        <form className='input'>
                            <Input className='userName-input' placeholder='phone-number,username or email' />
                            <Input type={passwordType.type} className='password-input' placeholder='password' />
                            <button className='toggle-password-visibility' onClick={togglePasswordVisibility}>{passwordType.text}</button>
                            <Button className='login-btn' value='Log In' type='submit' />
                        </form>
                        <div className='sign-up-breaker'>OR</div>
                        <div className='forgot-password-container'>
                            <a href='po'>Log in with facebook?</a>
                            <a href='pop'>Forgot password?</a>
                        </div>
                    </div>
                </div>
                <div className='sign-in-container-bottom'>Don't have an account? <a href="#"> Sign up</a></div>
                <div className='get-the-app-text'>Get the app</div>
                <div className='sign-in-btns-container'>
                    <img src={googleplayImage} className='googleBtn' alt='play button' />
                    <img src={microsoftImage} className='microsoftBtn' alt='microsoft button' />
                </div>
            </div>
        </section>
    )
}
export default SignIn;

