import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const link = (
    <>
        <li><NavLink to="/addItemPage">Add friend</NavLink></li>
        <li><NavLink to="/showItemPage">Show friend</NavLink></li>
        <li><NavLink to="/productManagement">product Manager</NavLink></li>
    </>
)
const Navbar = () => {
    const [user, setUser] = useState(false);
    const handleClick = () => {
        // if(user==false){
        //     setUser(true)
        // }else{
        //     setUser(false)
        // }
        setUser(!user)
    }

    return (
        <div className={`navbar  shadow-sm bg-base-200`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to="/">My App</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleClick} className={`btn bg-red-400 text-red-900 `}>Logout</Link> :
                        <Link onClick={handleClick} className={`btn bg-green-200 text-green-950`}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;