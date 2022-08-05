import React, { useState } from 'react';
import './style.css';
import person from '../../assets/person.jpg';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify'
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
                    <div className='register-images'>
                        {/* <img src='' alt='logo'/> */}
                        <img src={person} alt='Person' />
                    </div>
                    <form className='card-form' onSubmit={handleLogin}>
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
                                    name="name"
                                    type="text"
                                    placeholder="Full name"
                                    value={name}
                                    required="true"
                                    onChange={e => setName(e.target.value)}
                                />
                                <label>Type your email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Hello@gmail.com"
                                    required="true"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label>Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    required="true"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                                <label>Type your password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required="true"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="button-form" type='submit'>Sign Up</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
            <div className='footer'></div>
        </div>
    );
}