import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo'
                src={LOGO_URL}
                alt='App Logo'
            />
        </div>

        <div className='nav-items'>
            <ul>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About Us</li>
                <li className='nav-item'>Contact</li>
                <li className='nav-item'>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header;