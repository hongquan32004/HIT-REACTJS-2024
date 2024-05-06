import { Route, Routes, Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './Profile.scss'
const Profile = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/")

    }
    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')
    const [des, setDes] = useState('Description')
    const [dec, setDec] = useState([])
    const nav = useNavigate();


    const handleAddNew = () => {
        const newDec = {
            title: title,
            tag: tag,
            des: des
        }
        setDec([...dec, newDec]);
        setTitle("")
        setTag("")
        setDes("Description")
    }
    return (
        <div className='profile'>
            <div className='profile-content'>
                <div className="profile-content-left">
                    <div className='p-c-l-ct'>
                        <div className='im'> <img src={logo} alt="" /></div>
                        <h2><span>Posts</span></h2>
                        <h2 onClick={handleLogout}><span>Logout</span></h2>
                    </div>

                </div>
                <div className="profile-content-right">
                    <div className="content-box">
                        <div className="content-event">
                            <button onClick={handleAddNew} className="button add-new">Add new</button>
                            <div className="input">
                                <input type="text" placeholder='Title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                <select value={tag} onChange={(e) => setTag(e.target.value)}>
                                    <option value="">Select a tag</option>
                                    <option value="html,css">HTML,CSS</option>
                                    <option value="sql">SQL</option>
                                    <option value="java">JAVA</option>
                                </select>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Tags</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {dec.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.des}</td>
                                        <td>{item.tag}</td>
                                        <td>
                                            <div className='ic'><i className="fa-solid fa-pen"></i>
                                                <i class="fa-solid fa-trash-can"></i></div>

                                        </td>

                                    </tr>
                                ))}
                            </tbody>



                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;