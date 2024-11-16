import './nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <img src='src/images/logo-green.png' alt='' />
            <div className='navlinks'>
                <NavLink className='link' to='/login'>
                    sign in
                </NavLink>
                <NavLink className='link' to='/signup'>
                    sign up
                </NavLink>
            </div>
        </nav>
    );
};
export default Nav;
