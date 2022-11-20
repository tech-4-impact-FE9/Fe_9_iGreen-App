import React from "react";
import tree from '../Assets/pic1.png'
import './Register.css'
import {FcGoogle} from 'react-icons/fc'

const Register = () =>{
    return(
        <section class="section-login">
            <div class="container-login text-center">
                <div class="login">
                    <form action="">
                        <h1>Sign Up</h1>
                        <button type="submit" class="btn btn-outline-secondary btn-sm" id="login-google"><FcGoogle style={{paddingRight:'0.5rem'}} size={30}/>Sign Up With Google</button>
                    
                        <input type="emai" placeholder="Email" id="email"/>
                        <input type="text" placeholder="Username" id="username"/>
                        <input type="password" placeholder="Password" id="password"/>
                        <button id="sign-up-btn" type="button">Sign Up</button>
                        <p>
                            Already have account?<a href="../Login/login.html">Log In</a> here!
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

export default Register;