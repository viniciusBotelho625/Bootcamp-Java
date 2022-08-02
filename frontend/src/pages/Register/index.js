import React, { useState } from 'react';
import './style.css';
import person from '../../assets/person.jpg';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../services/userService/api';

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
            
        try {
            await userService.post('users/register', {
                name,
                email,
                username,
                password
            }).then(resp => {
                navigate('/', { replace: true })
            })
        } catch (error) {
            console.log(error.response)
        }
    }


    return(
        <div>
            <div className='container-register'>
                <div className='register-main'>
                    <div className='register-images'>
                        {/* <img src='' alt='logo'/> */}
                        <img src={person} alt='Person'/>
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
                                    onChange={e => setName(e.target.value)}
                                />
                                <label>Type your email</label>
                                <input 
                                    name="email"
                                    type="email"
                                    placeholder="Hello@gmail.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label>Username</label>
                                <input 
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                                <label>Type your password</label>
                                <input 
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='footer'></div>
        </div>
    );
}