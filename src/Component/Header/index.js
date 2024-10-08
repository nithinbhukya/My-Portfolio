import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src="https://i.postimg.cc/m2qVYWN0/Screenshot-2024-10-07-190945.png"
                    alt="logo"
                />
            </div>
            <ul className='list-items'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
