import React from "react";
import './HeaderD11.scss'
import { useNavigate } from "react-router-dom";
import useStore from "../../hooks/useStore";
import { actions } from "../../store";
const HeaderD11 = () => {
    const navigate = useNavigate();
    const [{ theme }, dispatch] = useStore();
    return (
        <div className="headerd11">
            <div className="headerd11-content">
                <div className="logo">
                    <img src="https://hi-fivedesign.com/wp-content/uploads/2024/03/AHS-Logo-01J.jpg" alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                </div>
                <div className="menu">
                    <ul>
                        <li><span onClick={() => navigate('/start-bootstrap')}>Start boostrap</span></li>
                        <li><span onClick={() => navigate('/todo-app')}>Todoapp</span></li>
                        <li><span onClick={() => navigate('/login1')}>Login</span></li>
                        <li>
                            <div onClick={() => dispatch(actions.setTheme())}>
                                {!theme ? (
                                    <i className="fa-solid fa-sun" style={{ color: 'rgb(242, 63, 22)' }}></i>
                                ) : (
                                    <i className="fa-solid fa-moon"></i>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HeaderD11;