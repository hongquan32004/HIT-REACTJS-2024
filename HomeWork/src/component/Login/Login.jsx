import { memo } from "react"
import './Login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="form-login">
                <input type="text" name="" id="" placeholder="username" />
                <br />
                <input type="password" placeholder="password" />
                <br />
                <button>LOGIN</button>
                <div className="card-a-login">
                    <a href="">Not registered?</a>
                    <a href="">Create an account</a>
                </div>
            </div>
        </div>
    )
}
export default memo(Login);