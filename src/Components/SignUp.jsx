import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './Firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [registerData, setRegisterdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });
    const nav = useNavigate();

    const handleChange = (e) => {
        // console.log(e.target.name + " = " + e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setRegisterdata({ ...registerData, [name]: value })
    }
    const handleSubmit = async () => {
        const { email, firstname, password, lastname } = registerData
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: firstname,
                    lastName: lastname
                });
            }
            alert("register succesfull")
            nav("/")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center'>

            <div className='flex items-center  flex-col gap-6 justify-center h-[450px] w-[450px] box mt-12'>
                <div className='flex flex-col w-[60%] gap-2' >
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="First Name" name='firstname' onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Last Name" name='lastname' onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" name='email' onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setShowPassword(!showPassword) }} viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type={showPassword ? "type" : "password"} className="grow" name='password' onChange={handleChange} />
                    </label>
                    <button onClick={handleSubmit} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Submit</button>
                </div>
                <Link to="/" ><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Sign In</button></Link>
            </div>
        </div>
    )
}
