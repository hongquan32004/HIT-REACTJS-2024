import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './SignIn.scss'
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import logo from '../../assets/images/Logo.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className='signin'>
            <div className='image'>
                <div className="image-content"><img src={logo} alt="" /></div>
            </div>
            <div className='signin-content'>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .required("Bạn không được bỏ trống"),
                        password: Yup.string()
                            .required("Bạn không được bỏ trống"),
                    })}
                    onSubmit={async (values) => {
                        try {
                            const { data } = await axios.post(
                                "https://reqres.in/api/login", values,
                            );
                            localStorage.setItem("access_token", data.token);
                            navigate("/")
                        }
                        catch (errors) {
                            console.error(errors);
                        }
                    }}

                >
                    {({ errors, touched }) => (
                        <Form className='form'>
                            <h1>Sign In</h1>
                            <label htmlFor="email">Email: </label><br />
                            <Field className="input" type="text" name="email" id="email" />
                            {errors.email && touched.email && (<p className='p1' style={{ color: 'red', fontSize: '14px' }}>{errors.email}</p>)}
                            <br />
                            <label htmlFor="password">Password:</label><br />
                            <Field className="input" type="password" name="password" id="password" />
                            {errors.password && touched.password && (<p className='p2' style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>)}
                            <br />
                            <button type='submit'>Sign In</button>

                        </Form>
                    )}
                </Formik>
            </div>



        </div>
    )
}

export default SignIn;