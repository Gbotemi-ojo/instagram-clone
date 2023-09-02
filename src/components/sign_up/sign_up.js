import React, { useState, useEffect } from 'react';
import PhoneTemplateContainer from '../common/phone-template-container';
import Button from '../common/button';
import Input from '../common/input';
import './sign_up.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const [visibility, setvisibility] = useState('toggle-password-visibility-sign-up');
    const [backendMessage, setbackendMessage] = useState('');
    const url = 'http://localhost:8080/instagram-clone';
    const [passwordType, setpasswordType] = useState({
        type: "password",
        text: "show"
    });
    const [errorClass, seterrorClass] = useState([
        {
            email: 'userName-input',
            fullname: 'userName-input',
            username: 'userName-input',
            password: 'password-input'
        }
    ]);
    const [userDetails, setUserDetails] = useState([
        {
            email: '',
            fullname: '',
            username: '',
            password: ''
        }
    ]);

    const handleEmailError = () => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const email = userDetails[0].email.toString()
        const match = regex.test(email);
        const error = [...errorClass];
        if (!match) {
            error[0].email = 'userName-input error';
            seterrorClass(error);
        }
        else {
            error[0].email = 'userName-input success';
            seterrorClass(error);
        }
    }

    const handleFullnameError = () => {
        const error = [...errorClass];
        if (userDetails[0].fullname.length === 0) {
            error[0].fullname = 'userName-input error'
            seterrorClass(error);
        }
        else {
            error[0].fullname = 'userName-input success';
            seterrorClass(error);
        }
    }
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


    const handleEmail = (e) => {
        const inputData = [...userDetails];
        inputData[0].email = e.target.value;
        setUserDetails(inputData);
        handleEmailError();
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
    const handleFullname = (e) => {
        const inputData = [...userDetails];
        inputData[0].fullname = e.target.value;
        setUserDetails(inputData);
        handleFullnameError()
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
                `${url}/signup`,
                userDetails[0],
                { headers: { "Content-type": "application/json; charset=UTF-8", } }
            ).then(() => {
                navigate("/instagram-clone/signin");
            })
        } catch (error) {
            let error_message = error.response.data
            if(typeof(error_message) === 'object'){
                setbackendMessage(error_message.error[0].msg);
            }
            else{
                setbackendMessage(error_message)
            }
            setisLoading(false);
        }
    }
    useEffect(() => {
        if (userDetails[0].password.length === 0) {
            setvisibility('toggle-password-visibility-sign-up invisible');
        }
        else {
            setvisibility('toggle-password-visibility-sign-up');
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
                            <Input name='email' className={errorClass[0].email} placeholder='Email' value={userDetails[0].email} onChange={handleEmail} />
                            <Input name='fullname' className={errorClass[0].fullname} placeholder='Full Name' value={userDetails[0].fullname} onChange={handleFullname} />
                            <Input name='username' min='4' className={errorClass[0].username} placeholder='username' value={userDetails[0].username} onChange={handleUsername} />
                            <Input name='password' min='8' className={errorClass[0].password} type={passwordType.type} placeholder='password' value={userDetails[0].password} onChange={handlePassword} />
                            <button className={visibility} onClick={togglePasswordVisibility}>{passwordType.text}</button>
                            <Button className='login-btn' type='submit' onClick={submit} >{isLoading ? <span className="loader"></span> : 'Sign up'} </Button>
                        </form>
                    </div>
                </div>
                <div className='sign-in-container-bottom'>Have an account? <a href="#"> Log in</a></div>
                <div className='backend-message'>{backendMessage}</div>
            </div>
        </section>
    )
}
export default Signup;