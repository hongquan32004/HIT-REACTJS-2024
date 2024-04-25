import { memo } from "react"
import './Login.scss'
import { useFormik, Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
const Login = () => {
    return (
        <div className="login">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .required("Bạn không được bỏ trống.")
                        .min(5, "Bạn phải nhập ít nhất 5 kí tự")
                    // .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/, "Tên đăng nhập không hợp lệ.")
                    ,
                    password: Yup.string()
                        .required("Bạn không được bỏ trống.")
                        .min(4, "Bạn phải nhập tối thiểu 8 kí tự.")
                    // .matches(/^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/,
                    //     'Mật khẩu không hợp lệ.')
                })}
                onSubmit={async (values) => {
                    try {
                        console.log("Post")
                        const result = await axios.post("https://dummyjson.com/auth/login", values);
                        console.log(result)
                        localStorage.setItem("login", result.token);
                        sessionStorage.setItem("login", result.token);
                    }
                    catch (error) {
                        console.log(error)
                    }

                }}

            >
                {({ errors, touched }) => (
                    <Form className="form">
                        <Field className="input" type="text" name="username" id="username" placeholder="username" />
                        {errors.username && touched.username && (<p className="p1" style={{ color: 'red', fontSize: '15px' }}>{errors.username}</p>)}
                        <br />
                        <Field className="input" type="password" name="password" id="password" placeholder="password" />
                        {errors.password && touched.password && (<p className="p2" style={{ color: 'red', fontSize: '15px' }}>{errors.password}</p>)}
                        <br />
                        <Field className="submit" type="submit" name="submit" id="submit" value='Submit form' />
                        <div className="card-a-login">
                            <a href="">Not registered?</a>
                            <a href="">Create an account</a>
                        </div>
                    </Form>
                )}

            </Formik>

        </div >
    )
}
export default Login;