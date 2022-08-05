import React, { useState } from "react";
import './style.css';


import Rocket from '../../assets/rocket.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

import userService from '../../services/userService/api'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    function handleLogin() {

    }

    return (
        <div className="container">
            <div className="stars" ></div>
            <div className="stars2" ></div> 
            
            <div className="scene">
                <div className="rocket">
                    <img src={Rocket} alt="Foguete" />
                </div>
            </div>

            <div className="card-sign-in">
                <form onSubmit={handleLogin} className="card-main">
                    <div className="card-header">
                        <h1>Welcome Back...</h1>
                        <p>Please enter your email and password</p>
                    </div>
                    <div className="card-body">
                        <input 
                            type={"email"}
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            type={"password"}
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        
                        <button>
                            login...
                            <span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </button>               
                    </div>
                </form>
                <hr></hr>
                <div className="card-footer">
                    <p>Don´t have an account?</p>
                    <Link to={'/register'}>
                        Create Account
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}  