import React, { useState,useEffect } from 'react';
import PhoneTemplateContainer from '../common/phone-template-container';
import { useNavigate } from 'react-router-dom';
import Button from '../common/button';
import Input from '../common/input';
import axios from 'axios';
import './sign_in.css';
function SignIn() {
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const [visibility, setvisibility] = useState('toggle-password-visibility');
    const [backendMessage, setbackendMessage] = useState('');
    const url = 'http://localhost:8080/instagram-clone';
    const [passwordType, setpasswordType] = useState({
        type: "password",
        text: "show"
    });
    const [userDetails, setUserDetails] = useState([
        {
            username: '',
            password: ''
        }
    ]);
    const [errorClass, seterrorClass] = useState([
        {
            username: 'userName-input',
            password: 'password-input'
        }
    ]);
    const handleUsernameError = () => {
        const error = [...errorClass];
        if (userDetails[0].username.length < 4) {
            error[0].username = 'userName-input error'
            seterrorClass(error);
        }
        else {
            error[0].username = 'userName-input success';
            seterrorClass(error);
        }
    }
    const handlePasswordError = () => {
        const error = [...errorClass];
        if (userDetails[0].password.length < 8) {
            error[0].password = 'password-input error'
            seterrorClass(error);
        }
        else {
            error[0].password = 'password-input success';
            seterrorClass(error);
        }
    }
    const handleUsername = (e) => {
        const inputData = [...userDetails];
        inputData[0].username = e.target.value;
        setUserDetails(inputData);
        handleUsernameError();
    }
    const handlePassword = (e) => {
        const inputData = [...userDetails];
        inputData[0].password = e.target.value;
        setUserDetails(inputData);
        handlePasswordError();
    }
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
    const submit = async () => {
        setisLoading(true)
        try {
            await axios.post(
                `${url}/signin`,
                userDetails[0],
                { headers: { "Content-type": "application/json; charset=UTF-8", } }
            ).then((user) => {
                console.log(user)
                localStorage.setItem('token', user.data.token)
                navigate("/instagram-clone");
            })
        } catch (error) {
            console.log(error)
            let error_message = error.response.data
            if (typeof (error_message) === 'object') {
                setbackendMessage(error_message.error[0].msg);
            }
            else {
                setbackendMessage(error_message)
            }
            setisLoading(false);
        }
    }
    useEffect(() => {
        if (userDetails[0].password.length === 0) {
            setvisibility('toggle-password-visibility invisible');
        }
        else {
            setvisibility('toggle-password-visibility');
        }
    }, [userDetails[0].password]);
    return (
        <section className='sign-in-page-container'>
            <PhoneTemplateContainer />
            <div className='sign-in-container'>
                <div className='sign-in-container-top'>
                    <div className='insta-logo'>Instagram</div>
                    <div className='form-container'>
                        <form className='input' onSubmit={(e) => { e.preventDefault() }}>
                            <Input name='username' min='4' className={errorClass[0].username} placeholder='username' value={userDetails[0].username} onChange={handleUsername} />
                            <Input name='password' min='8' className={errorClass[0].password} type={passwordType.type} placeholder='password' value={userDetails[0].password} onChange={handlePassword} />
                            <button className={visibility} onClick={togglePasswordVisibility}>{passwordType.text}</button>
                            <Button className='login-btn' type='submit' onClick={submit} >{isLoading ? <span className="loader"></span> : 'Sign up'} </Button>
                        </form>
                        <div className='sign-up-breaker'>OR</div>
                        <div className='forgot-password-container'>
                            <a href='po'>Log in with facebook?</a>
                            <a href='pop'>Get Started With a Demo account</a>
                        </div>
                    </div>
                </div>
                <div className='sign-in-container-bottom'>Don't have an account? <a href="#"> Sign up</a></div>
                <div className='backend-message'>{backendMessage}</div>
            </div>
        </section>
    )
}
export default SignIn;

