import React from "react";
import tree from '../Assets/pic1.png'
import './Login.css'
import { FcGoogle } from "react-icons/fc";


const Login = () =>{
    return(
        <section class="section-login">
            <div class="container-login text-center">
                <div class="login">
                    <form action="">
                        <h1>Login</h1>
                        <button type="submit" class="btn btn-outline-secondary btn-sm" id="login-google"><FcGoogle style={{paddingRight:'0.5rem'}} size={30}/>Login With Google</button>
                        <p>Enter your Email and Password</p>
                        <input type="email" placeholder="Email" id="email"/>
                        <input type="password" placeholder="Password" id="password"/>
                        <p class="forgot-pass">
                            <a href="#">Forgot Password?</a>
                        </p>
                        <button id="sign-in-btn" type="button">Login</button>
                        <p>
                            Don't have any account?<a href="../Register/register.html" id="sign-up-form">Sign Up</a> here!
                        </p>
                    </form>
                </div>
                <div class="right">
                    <img src={tree} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Login;