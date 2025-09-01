import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo'
                    src={LOGO_URL}
                    alt='App Logo'
                />
            </div>

            <div className='nav-items'>
                <ul>
                    <li className='nav-item'>
                        <Link to={'/'}>Home</Link></li>
                    <li className='nav-item'><Link to={'/about'}>About Us </Link></li>
                    <li className='nav-item'><Link to={'/contact'}>Contact </Link></li>
                    <li className='nav-item'>Cart</li>
                    <li 
                        className='nav-item'
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                        >{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;