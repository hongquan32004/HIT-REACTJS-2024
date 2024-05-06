import "./Footer.scss";
import logo from '../../assets/images/Logo.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-box">
                    <div className="footer-up">
                        <div className="footer-left">
                            <div className="logo-info">
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                                <h3>DataWarehouse</h3>
                            </div>
                            <p className="address-info">Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
                            <p className="phone-info">info@warehouse.project 1-232-3434 (Main)</p>
                        </div>
                        <div className="footer-right">
                            <ul className="category">
                                <li>
                                    <h3>About</h3>
                                </li>
                                <li>Profile</li>
                                <li>Features</li>
                                <li>Careers</li>
                                <li>DW News</li>
                            </ul>
                            <ul className="category">
                                <li>
                                    <h3>Help</h3>
                                </li>
                                <li>Support</li>
                                <li>Sign up</li>
                                <li>Guide</li>
                                <li>Reports</li>
                                <li>Q&A</li>
                            </ul>
                            <ul className="category">
                                <li>
                                    <h3>Scial Media</h3>
                                </li>
                                <div className="category-icon">
                                    <li><i className="fa-brands fa-facebook"></i></li>
                                    <li><i className="fa-brands fa-twitter"></i></li>
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                </div>

                            </ul>
                        </div>
                    </div>
                    <div className="footer-down">
                        <p>
                            © Datawarehouse™, 2020. All rights reserved. Company Registration
                            Number: 21479524.
                        </p>
                        <div className="chat-box">
                            <div className="chat">
                                <i className="fa-brands fa-rocketchat"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;