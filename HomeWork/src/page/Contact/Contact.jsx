import { memo } from "react"
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './Contact.scss'

const Contact = () => {
    const isactiveClassName = ({ isActive }) => {
        return isActive ? 'active' : '';
    };
    return (
        <div className="Contact">
            <div className="startbootstrap-header">
                <div className="startbootstrap-header-content">
                    <NavLink to="/" className={isactiveClassName}><h1>Start Bootstrap</h1></NavLink>
                    <button><NavLink to="/login" className={isactiveClassName}>Login</NavLink></button>
                </div>
            </div>
            <div className="startbootstrap-banner">
                <div className="banner">
                    <div className="banner-content">
                        <h1>Contact Start Bootstrap</h1>
                        <div className="input">
                            <input type="text" placeholder="Email address" />
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="startbootstrap-footer">
                <div className="startbootstrap-footer-content">
                    <div className="content-left">
                        <ul className="footer-nav">
                            <li><NavLink to="/about-us" className={isactiveClassName}>About-us</NavLink></li>
                            <li><NavLink to="/contact" className={isactiveClassName}>Contact</NavLink></li>
                            <li><NavLink to="/login" className={isactiveClassName}>Login</NavLink></li>
                            <li><NavLink to="/sign-up" className={isactiveClassName}>Signup</NavLink></li>
                        </ul>
                        <p class="p-desc">© Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="content-right">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Contact)