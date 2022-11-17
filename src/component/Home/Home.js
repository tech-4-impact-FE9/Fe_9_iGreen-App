import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'
import AYO from '../Assets/AYO.png'
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        
        <section class="section-jumbotron">
            <div class="container">
                <div data-aos="fade-up" data-aos-duration="2000" class="row-jumbotron row align-items-center">
                    <div class="col">
                        <div class="wrapper-headline">
                            <h1 class="headline-h1 mb-5">
                                Register now and be a green activist for a better earth
                            </h1>
                            
                            <div class="headline-paragraf">
                                <button class="button-lg-secondary me-4 btn-lg"> <Link to="/Register">Get Started </Link> </button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <img class="image-jumbotron" src={AYO} alt=""/>
                    </div>
                </div>
            </div>
        </section>
   
    )
}

export default Home;