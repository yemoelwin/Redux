import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import CustomInput from './CustomInput'

const UserLogin = () => {
    return (
        <>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className='User-login'>
                    <div className="auth-card ">
                        <h3 className="text-center mb-3">Login</h3>
                        <form action="" className="">
                            <CustomInput type="email" name="email" placeholder="Email" />
                            <CustomInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            />
                            <div>
                            <Link to="/forgot-password" className='forgotpassword'>Forgot Password?</Link>

                            <div className="login-pattern">
                                <button className="button border-0" type="submit">
                                Login
                                </button>
                                <Link to="/signup" className="button signup">
                                SignUp
                                </Link>
                            </div>
                            </div>
                        </form>
                        </div>
                </div>
            </Container>
        </>
    )
}

export default UserLogin