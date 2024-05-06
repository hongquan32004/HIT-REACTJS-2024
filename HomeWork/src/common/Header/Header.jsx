import { Route, Routes, Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import { useNavigate } from "react-router-dom";
import './Header.scss'
const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("access_token")
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                {!isLoggedIn ? (
                    <button onClick={() => navigate("/sign-in")}>Sign in</button>
                ) : (
                    <div className='header-button'>
                        <button onClick={() => navigate("/profile")}>Profile</button>
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Header