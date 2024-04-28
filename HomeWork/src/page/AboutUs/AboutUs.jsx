import { memo } from "react"
import './AboutUs.scss'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

const AboutUs = () => {
    const isactiveClassName = ({ isActive }) => {
        return isActive ? 'active' : '';
    };
    return (
        <div className="About-us">
            <div className="startbootstrap-header">
                <div className="startbootstrap-header-content">
                    <NavLink to="/" className={isactiveClassName}><h1>Start Bootstrap</h1></NavLink>
                    <button><NavLink to="/login" className={isactiveClassName}>Login</NavLink></button>
                </div>
            </div>
            <div className="startbootstrap-banner">
                <div className="banner">
                    <div className="banner-content">
                        <h1>About Us</h1>
                    </div>
                </div>
            </div>
            <div className="people-think">
                <div className="people-think-content">
                    <h1>What people are saying...</h1>
                    <div className="people-think-container">
                        <div className="people-think-item">
                            <div className="img">
                                <img src="https://start-bootstrap-ten.vercel.app/assets/testimonials-1-CNxFrjqD.jpg" alt="" />
                            </div>
                            <h3>Margaret E.</h3>
                            <p>"This is fantastic! Thanks so much guys!"</p>
                        </div>
                        <div className="people-think-item">
                            <div className="img">
                                <img src="https://start-bootstrap-ten.vercel.app/assets/testimonials-2-Ui5WBQGD.jpg" alt="" />
                            </div>
                            <h3>Fred S.</h3>
                            <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                        <div className="people-think-item">
                            <div className="img">
                                <img src="https://start-bootstrap-ten.vercel.app/assets/testimonials-3-CdIuPdtQ.jpg" alt="" />
                            </div>
                            <h3>Sarah W.</h3>
                            <p>"Thanks so much for making these free resources available to us!"</p>
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
export default memo(AboutUs)