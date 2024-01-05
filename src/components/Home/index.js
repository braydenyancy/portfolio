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
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%',
                width: '75%',
            }}>

                <div className='text-zone'>
                    <h1 className="HeaderAnimation">Hi, I'm
                        <br />
                        Brayden.
                        <br />
                        FullStack Developer.
                    </h1>
                </div>
                <div className="contactMeButton">
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <div>
                    <CardMedia
                        className="projectImg"
                        component="img"
                        image={projectsIMG}
                        alt="project" 
                        style={{
                            width: '24vmax'
                        }}/>
                </div>
            </div>
        </div>
    )
}

export default Home;