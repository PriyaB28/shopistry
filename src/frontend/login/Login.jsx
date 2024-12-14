import React, { useEffect } from 'react'
import loginImage from '../../assets/frontend/images/login.jpg'
import logo from '../../assets/frontend/images/logo.png'
import './login.css'
import { useState } from 'react'
import {  NavLink, Navigate, useNavigate } from 'react-router'
import { Password } from 'react-flaticons'


// const navigate = useNavigate();


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("13");
    const rolecheck = localStorage.getItem("role");
    useEffect(() => {
        
        if (rolecheck != null &&rolecheck.toLowerCase() == 'admin') {
            console.log('hello');
            navigate('/admin/dashboard');
        } else if(rolecheck !=null && rolecheck.toLowerCase() == 'user') {
            navigate('/')
        }
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("password", password);
        const rolecheck = localStorage.getItem("role");
        if (rolecheck.toLowerCase() == 'admin') {
            console.log('hello');
            
            navigate('/dashboard');
        }
        else {
            navigate('/')
        }
    }
    return (
        // <section className={`md:h-screen py-36 flex items-center bg-orange-900/90 bg-[url('./assets/frontend/images/hero/bg-shape.png')] bg-center bg-no-repeat bg-cover`}>
        <section className={`md:h-screen py-36 flex items-center bg-orange-900/90 bg-[url('./assets/frontend/images/hero/bg-shape.png')] bg-center bg-no-repeat bg-cover`}>
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                            <div className="relative md:shrink-0">
                                <img className="lg:h-full h-full w-full object-cover md:h-[34rem]" src={loginImage} alt="" />
                            </div>

                            <div className="p-7 lg:px-20">
                                <div className="text-center">

                                    <NavLink to="/">
                                     
                                        <img src={logo} className="mx-auto hidden dark:block  w-36" alt="" />
                                    </NavLink>

                                </div>

                                <form className="text-start lg:py-20 py-8" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1">
                                       
                                    <div className="mb-4">
                                            <label className="font-semibold" >Email Address:</label>

                                            <input  type="email" name='email' className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="name@example.com" value={email} onChange={(e)=>(setEmail(e.target.value))} />
                                        </div>
                                    <div className="mb-4">
                                            <label className="font-semibold" >Role:</label>
                                            <input  type="text" name='role' className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="role" value={role} onChange={(e)=>(setRole(e.target.value))} />

                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" >Password:</label>

                                            <input id="LoginPassword" name='password' type="password" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Password:" value={password} onChange={(e)=>(setPassword(e.target.value))} />

                                        </div>

                                        {/* <div className="flex justify-between mb-4">
                                            <div className="flex items-center mb-0">
                                                <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
                                                <label className="form-checkbox-label text-slate-400" >Remember me</label>
                                            </div>
                                            <p className="text-slate-400 mb-0"><a href="forgot-password.html" className="text-slate-400">Forgot password ?</a></p>
                                        </div> */}

                                        <div className="mb-4">
                                            <input type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full" value="Login / Sign in" />
                                        </div>

                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Don't have an account ?</span> <a href="signup.html" className="text-black dark:text-white font-bold inline-block">Sign Up</a>
                                        </div>
                                    </div>
                                </form>

                                <div className="text-center">
                                    <p className="mb-0 text-slate-400">© <script>document.write(new Date().getFullYear())</script> Cartzio. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login