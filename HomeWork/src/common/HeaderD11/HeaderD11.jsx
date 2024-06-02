import React from "react";
import './HeaderD11.scss'
import { useNavigate } from "react-router-dom";
import useStore from "../../hooks/useStore";
import { actions } from "../../storeContext";
const HeaderD11 = () => {
    const navigate = useNavigate();

    return (
        <div className="headerd11">
            <div className="headerd11-content">
                <div className="logo">
                    <img src="https://hi-fivedesign.com/wp-content/uploads/2024/03/AHS-Logo-01J.jpg" alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                </div>
                <div className="menu">
                    <ul>
                        <li><span onClick={() => navigate('/card')}>CARD</span></li>
                        <li><span onClick={() => navigate('/soqe')}>System of Quartic Equations</span></li>
                        <li><span onClick={() => navigate('/qe')}>Quartic Equation</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HeaderD11;