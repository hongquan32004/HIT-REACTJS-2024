import { memo } from "react"
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './Login.scss'
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const Login = () => {
    return (
        <div className="backgroud">
            <div className="login">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .required("Bạn không được bỏ trống."),

                        password: Yup.string()
                            .required("Bạn không được bỏ trống.")

                    })}
                    onSubmit={(values) => {
                        console.log(values)
                    }}

                >
                    {({ errors, touched }) => (
                        <Form className="form">
                            <div class="auth-close"><NavLink to="/start-bootstrap"><i class="fa-solid fa-xmark"></i></NavLink></div>
                            <Field className="input" type="text" name="email" id="email" placeholder="email" />
                            {errors.email && touched.email && (<p className="p" style={{ color: 'red', fontSize: '15px' }}>{errors.email}</p>)}
                            <br />
                            <Field className="input" type="password" name="password" id="password" placeholder="password" />
                            {errors.password && touched.password && (<p className="p2" style={{ color: 'red', fontSize: '15px' }}>{errors.password}</p>)}
                            <br />
                            <Field className="submit" type="submit" name="submit" id="submit" value='Login' />
                            <div className="card-a-login">
                                <a href="">Don't have account?</a>
                                <NavLink to="/register">Register</NavLink>
                            </div>
                        </Form>
                    )}

                </Formik>

            </div >
        </div>

    )
}
export default memo(Login)