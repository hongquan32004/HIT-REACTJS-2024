import { memo } from "react"
import './StartBootstrap.scss'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

import AboutUs from "../AboutUs/AboutUs"
import Contact from "../Contact/Contact"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"
import { useNavigate, useParams } from "react-router-dom"

const StartBootstrap = () => {
    const isactiveClassName = ({ isActive }) => {
        return isActive ? 'active' : '';
    };
    const navigate = useNavigate();


    return (
        <div className="startbootstrap">
            <div className="startbootstrap-header">
                <div className="startbootstrap-header-content">
                    <NavLink to="/" className={isactiveClassName}><h1>Start Bootstrap</h1></NavLink>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
            <div className="startbootstrap-banner">
                <div className="banner">
                    <div className="banner-content">
                        <h1>Generate more leads with a professional landing page!</h1>
                    </div>
                </div>
            </div>
            <div className="startbootstrap-feature">
                <div className="startbootstrap-feature-content">
                    <div className="feature-item">
                        <i class="fa-regular fa-window-maximize"></i>
                        <h1>Fully Responsive</h1>
                        <p>This theme will look great on any device, no matter the size!</p>
                    </div>
                    <div className="feature-item">
                        <i class="fa-solid fa-layer-group"></i>
                        <h1>Bootstrap 5 Ready</h1>
                        <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
                    </div>
                    <div className="feature-item">
                        <i class="fa-solid fa-terminal"></i>
                        <h1>Easy to Use</h1>
                        <p>Ready to use with your own content, or customize the source files!</p>
                    </div>
                </div>
            </div>
            <div className="show-case-features">
                <div className="show-case-features-content">
                    <div className="show-case-item">
                        <div className="show-case-item-content">
                            <h1>Fully Responsive Design</h1>
                            <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                        </div>
                        <div className="show-case-item-img">
                            <img src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-1-DKDWhlFr.jpg" alt="" />
                        </div>
                    </div>
                    <div className="show-case-item">
                        <div className="show-case-item-img">
                            <img src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-2-C7T817Rj.jpg" alt="" />
                        </div>
                        <div className="show-case-item-content">
                            <h1>Updated For Bootstrap 5</h1>
                            <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                        </div>
                    </div>
                    <div className="show-case-item">
                        <div className="show-case-item-content">
                            <h1>Easy to Use & Customize</h1>
                            <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                        </div>
                        <div className="show-case-item-img">
                            <img src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-3-fvuC94nJ.jpg" alt="" />
                        </div>
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
            <div className="sign-up">
                <div className="sign-up-banner">
                    <div className="sign-up-banner-content">
                        <h1>Ready to get started? Sign up now!</h1>
                        <button><NavLink to="/register" className={isactiveClassName}>Register</NavLink></button>
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
                            <li><NavLink to="/register" className={isactiveClassName}>Signup</NavLink></li>
                        </ul>
                        <p class="p-desc">© Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="content-right">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default memo(StartBootstrap)