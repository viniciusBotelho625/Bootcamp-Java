import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function Header() {
    return(
        <header>
            <div>
                <Link to="/home" className="card-logo" >
                    <img src={Logo} alt="logo"/>
                    <p>CineCorn</p>
                </Link>
            </div>
            <div>
                <span className="icon-favorite">
                    <Link to="/favorites" className="favorite">
                        <FontAwesomeIcon icon={faHeartCircleCheck}/>
                    </Link>
                </span>
            </div>
        </header>
    );
}