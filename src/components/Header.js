import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    return (
        <div className='flex justify-between shadow-lg m-2 p-2'>
            <div className='logo-container'>
                <img className='w-32'
                    src={LOGO_URL}
                    alt='App Logo'
                />
            </div>

            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    {onlineStatus ? <li className="px-4">🟢 Online</li> : <li className="nav-item">🔴 Offline</li>}
                    <li className='nav-item'>
                        <Link to={'/'}>Home</Link></li>
                    <li className='px-4'><Link to={'/about'}>About Us </Link></li>
                    <li className='px-4'><Link to={'/contact'}>Contact </Link></li>
                    <li className="px-4"><Link to={'/grocery'}>Grocery Mart</Link></li>
                    <li className='px-4'><Link to={'/cart'}>Cart - ({cartItems.length} items)</Link></li>
                    <li 
                        className='px-4 cursor-pointer'
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                        >{btnName}</li>
                    <li className='px-4'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;