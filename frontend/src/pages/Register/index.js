import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/logo.png';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import userService from '../../services/userService/api';

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const notitySuccess = () => toast.success("Successful registration", {
        position: toast.POSITION.TOP_CENTER
    });
    const notityError = () => toast.error("Error when registering", {
        position: toast.POSITION.TOP_CENTER
    });


    async function handleLogin(e) {
        e.preventDefault();

        try {
            await userService.post('users/register', {
                name,
                email,
                username,
                password
            }).then(resp => {
                const user = resp.data;
                notitySuccess();
                setTimeout(() => {
                    navigate('/', { replace: true })
                }, 4000)
            })
        } catch (error) {
            const resp = error.response.data.errors;
            console.log(resp)
            notityError();
        }
    }

    return (
        <div>
            <div className='container-register'>
                <div className='register-main'>
                    <div className='register-side-bar'>
                        <img src={logo} alt='Person' />
                    </div>
                    <form className='card-form' onSubmit={handleLogin}>
                        <div className='form'>
                            <div className='form-header'>
                                <p className='title'>Not Long, Complete Your Registration!</p>
                                <hr/>
                            </div>
                            <div className='form-body'>
                                <div className='form-row'>
                                    <div className='input-label'>
                                        <label>User full name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Full name"
                                            value={name}
                                            required="true"
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className='input-label'>
                                        <label>Type your email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Hello@gmail.com"
                                            required="true"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='input-label'>
                                        <label>Username</label>
                                        <input
                                            name="username"
                                            type="text"
                                            placeholder="Username"
                                            required="true"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                    </div> 
                                    <div className='input-label'>
                                        <label>Type your password</label>
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            required="true"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <span className='icon'>
                                            <FontAwesomeIcon icon={faUnlockKeyhole} />
                                        </span>
                                    </div>   
                                </div>
                            </div>
                            <div className='form-footer'>
                                <div>
                                    <Link to={"/"}>
                                        <button type='button'>Back 
                                            <span>
                                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                            </span>
                                        </button>
                                    </Link>
                                    <button type='submit'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}