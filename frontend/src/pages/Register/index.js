import React from 'react';
import './style.css';
import person from '../../assets/person2.jpg';
import { Link } from 'react-router-dom';

export default function Register() {
    return(
        <div>
            <div className='container-register'>
                <div className='register-main'>
                    <div className='register-images'>
                        {/* <img src='' alt='logo'/> */}
                        <img src={person} alt='Person'/>
                    </div>
                    <div className='card-form'>
                        <div className='form'>
                            <div className='form-header'>
                                <p className='title'>Get Started</p>
                                <div>
                                    <p>Already Have Account?</p> 
                                    <Link classname="link" to={"/"}>
                                        Sign in
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className='form-body'>
                                <label>User full name</label>
                                <input 
                                    type="text"
                                    placeholder="Full name"
                                />
                                <label>Type your email</label>
                                <input 
                                    type="email"
                                    placeholder="Hello@gmail.com"
                                />
                                <label>Username</label>
                                <input 
                                    type="text"
                                    placeholder="Username"
                                />
                                <label>Type your password</label>
                                <input 
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button type='submit'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'></div>
        </div>
    );
}