import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import './HomeD9.scss'
import image1 from '../../assets/images/image1 1.png'
import image2 from '../../assets/images/image3 1.png'
import image3 from '../../assets/images/image4.png'
import image4 from '../../assets/images/image5 1.png'
import image5 from '../../assets/images/image6 1.png'
import image6 from '../../assets/images/Ellipse 76.png'
const HomeD9 = () => {
    return (
        <div className="homeD9">
            <Header />
            <div className="banner">
                <div className="banner-content">
                    <div className="banner-content-item">
                        <div className="banner-content-title">
                            <h1>Save your data storage here.</h1>
                            <p>Data Warehouse is a data storage area that has been
                                tested for security, so you can store your data here
                                safely but not be afraid of being stolen by others.</p>
                            <button>Learn more</button>
                        </div>
                        <div className="banner-content-image">
                            <img src={image1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="features-content">
                    <div className="features-content-title">
                        <h1>Features</h1>
                        <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
                    </div>
                    <div className="features-content-item">
                        <div className="item">
                            <div className="item-image">
                                <img src={image2} alt="" />
                            </div>
                            <div className="item-title">
                                <h2>Search Data</h2>
                                <p>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                <span>Learn more</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={image3} alt="" />
                            </div>
                            <div className="item-title">
                                <h2>24 Hours Access</h2>
                                <p>Access is given 24 hours a full morning to night and
                                    meet again in the morning, giving you comfort when
                                    you need data when urgent.</p>
                                <span>Learn more</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={image4} alt="" />
                            </div>
                            <div className="item-title">
                                <h2>Print Out</h2>
                                <p>Print out service gives you convenience if someday
                                    you need print data, just edit it all and just print it.</p>
                                <span>Learn more</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={image5} alt="" />
                            </div>
                            <div className="item-title">
                                <h2>Security Code</h2>
                                <p>Data Security is one of our best facilities. Allows for your files
                                    to be safer. The file can be secured with a code or password that
                                    you created, so only you can open the file.</p>
                                <span>Learn more</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="testimonials">
                <div className="testimonials-box">
                    <div className="title-monial">
                        <h3>Testimonials</h3>
                    </div>

                    <div className="testimonials-content">
                        <i className="fa-solid fa-arrow-left"></i>
                        <div className="comment-box">
                            <div className="avatar">
                                <img src={image6} alt="" />
                            </div>
                            <div className="info">
                                <div className="info-up">
                                    <h5>John Fang</h5>
                                    <span>wordfaang.com</span>
                                </div>
                                <div className="info-down">
                                    <p>
                                        Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                                        viverra enim erat tortor ultricies massa turpis. Arcu
                                        pulvinar aenean nam laoreet nulla.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default HomeD9;