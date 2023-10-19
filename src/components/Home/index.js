import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.scss';
import projectsIMG from '../../assets/images/Projects.png'
import { Card, CardMedia, Grid } from "@mui/material";
// import Container from "@mui/material/Container";
// import polarDrippy from '../../assets/images/polar drippy.png';
// import slimSteely from '../../assets/videos/slimSteel.mp4';
// import bulletProof from '../../assets/videos/Bulletproof.mp4';



const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, I'm
                    <br />
                    Brayden.
                    <br />
                    FullStack Developer.
                </h1>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                <CardMedia 
                className="projectImg" 
                component="img" 
                image={projectsIMG} 
                alt="project" />
            </div>
        </div>
    )
}

export default Home;