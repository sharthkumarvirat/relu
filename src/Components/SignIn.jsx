import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth } from './Firebase';

export default function SignIn() {
    const [showPass, setShowPass] = useState(false)
    const [userdata, setUserData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()


    const handleChange = (e) => {
        // console.log( e.target.name + " = " + e.target.value);
        // console.log('value = ', e.target.value);
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userdata, [name]: value })
    }
    const handleSubmit = async () => {
        const { email, password } = userdata
        try {
            await signInWithEmailAndPassword(auth, email, password)
            //    console.log("welcom to firebase");
            navigate('/main');
            alert("login suceesfull");
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }
    return (
        <div className='flex items-center justify-center'>

            <div className='flex items-center flex-col gap-3 justify-center max-h-96 max-w-md border-2 rounded-md p-10 bg-slate-500 '>
                <div className='flex flex-col w-/4 gap-2'>
                    <label className="input input-bordered flex items-center gap-4">
                        Email
                        <input type="email" className="grow" placeholder="Enter mail" name='email' onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-4">
                        Password
                        <input type={showPass ? "text" : "password"} className="grow" placeholder="enter the password" name='password' onChange={handleChange} />
                        <svg onClick={() => { setShowPass(!showPass) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    </label>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md" onClick={handleSubmit}>Sign In</button>
                </div>
                <Link to='/signup'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md" >Sign up</button></Link>
            </div>
        </div>
    )
}
