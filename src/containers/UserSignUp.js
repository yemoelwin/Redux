import React, { useState, useEffect } from 'react'
import Container from './Container'
import CustomInput from './CustomInput'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { signupUser } from '../redux/actions/productsActions';

const UserSignUp = () => {
    // const [firstname, setfirstname] = useState("");
    // const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // const [phone, setmobile] = useState("");
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setusername(searchParams.get('username') || '');
        setemail(searchParams.get('email') || '');
        setpassword(searchParams.get('password') || '');
        // setmobile(searchParams.get('phone') || '');

    }, [location])
    
    const registerHandle = () => {
        const result = {
            username,
            email,
            password,
            // phone
        }
        console.log("result",result)
        dispatch(signupUser(result))
    }
    return (
        <>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                    <div className="auth-card">
                    <h3 className="text-center mb-3">Sign Up</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        
                        {/* <CustomInput type="text" name="firstname" value={firstname} placeholder="First Name" onChange={(e) => setfirstname(e.target.value)} />
                         */}
                        <CustomInput type="text" name="username" value={username} placeholder="Username" onChange={(e) => setusername(e.target.value)} />
                        
                        <CustomInput type="email" name="email" value={email} placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                        
                        {/* <CustomInput type="tel" name="phone" value={phone} placeholder="Phone Number" onChange={(e) => setmobile(e.target.value)} /> */}
                        
                        <CustomInput type="password" name="password" value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value) }/>
                        
                        <div>
                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                            <button onClick={registerHandle} className="button border-0">Sign Up</button>
                        </div>
                        </div>
                    </form>
                    </div>
            </Container>
        </>
    )
}

export default UserSignUp