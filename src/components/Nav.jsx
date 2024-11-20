import { Link, Outlet } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <>
            <nav>
                <img src='src/images/logo-green.png' alt='' />
                <div className='nav-links'>
                    <Link to='/' className='link'>
                        Home
                    </Link>
                    <Link to='/about' className='link'>
                        About
                    </Link>
                    <Link to='/login' className='link'>
                        Log In
                    </Link>
                    <Link to='/signup' className='link'>
                        Sign Up
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
};
export default Nav;
