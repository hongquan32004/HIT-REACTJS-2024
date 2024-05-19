import './HomeD11.scss'
import logo from '../../assets/images/fd866808-4e6f-4d16-866b-cc0aa6e64bb6.jpeg'
const HomeD11 = () => {
    return (
        <div className='homed11'>
            <div className="homed11-card">
                <div className="homed11-card-content-up">
                    <div className="content-up-img">
                        <div className="img">
                            <img src={logo} alt="" />
                        </div>
                        <div className="name">
                            <h1>Trần Hồng Quân</h1>
                            <h3>thquan1103@gmail.com</h3>
                            <h3>0943141560</h3>
                        </div>
                    </div>
                    <div className="content-up-link">
                        <div className="link-item">
                            <i className="fa-solid fa-briefcase"></i>
                            <span>Student at Hanoi University of Industry</span>
                        </div>
                        <div className="link-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Huong Son district - Ha Tinh province</span>
                        </div>
                        <div className="link-item">
                            <i className="fa-solid fa-link"></i>
                            <span>Directory - Google+ - Personal site</span>
                        </div>
                    </div>
                </div>
                <div className="homed11-card-content-down">
                    <h2>Add to Contacts</h2>
                    <div className='content-down-i'>
                        <a href="https://www.facebook.com/tran.quan.351104"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://github.com/hongquan32004"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.instagram.com/hongquan03_04/"><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeD11;