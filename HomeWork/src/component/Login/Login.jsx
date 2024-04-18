import { memo } from "react"
import './Login.scss'
import { useFormik, Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

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
                        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/, "Tên đăng nhập không hợp lệ."),
                    password: Yup.string()
                        .required("Bạn không được bỏ trống.")
                        .min(8, "Bạn phải nhập tối thiểu 8 kí tự.")
                        .matches(/^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/,
                            'Mật khẩu không hợp lệ.')
                })}
                onSubmit={(values) => {
                    console.log(values)
                }}

            >
                {({ errors, touched }) => (
                    <Form className="form">
                        <Field className="input" type="text" name="username" id="username" placeholder="username" />
                        {errors.username && touched.username && (<p style={{ color: 'red', fontSize: '15px' }}>{errors.username}</p>)}
                        <br />
                        <Field className="input" type="password" name="password" id="password" placeholder="password" />
                        {errors.password && touched.password && (<p style={{ color: 'red', fontSize: '15px' }}>{errors.password}</p>)}
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
export default memo(Login);