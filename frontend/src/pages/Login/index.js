import React from "react";
import './style.css';


import Rocket from '../../assets/rocket-1.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="container">
            <div class="stars" ></div>
            <div class="stars2" ></div> 
            
            <div className="scene">
                <div className="rocket">
                    <img src={Rocket} alt="Foguete" />
                </div>
            </div>

            <div className="card-sign-in">
                <div className="card-main">
                    <div className="card-header">
                        <h1>Welcome Back...</h1>
                        <p>Please enter your email and password</p>
                    </div>
                    <div className="card-body">
                        <input type={"email"}
                            name="email"
                            placeholder="Email"
                        />
                        <input type={"password"}
                            name="password"
                            placeholder="Password"
                        />
                        
                        <button>
                            login...
                            <span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                            
                        </button>
                        
                    </div>
                </div>
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