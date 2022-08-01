import React from 'react';
import './style.css';
import person from '../../assets/teste.png';

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
                                <p>Already Have Account?</p>
                            </div>
                            <div className='form-body'>
                                <label>User full name</label>
                                <input 
                                    type="text"
                                    placeholder="Full name"
                                />
                                <label></label>
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
        </div>
    );
}