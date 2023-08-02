import React from "react";
import { Link } from "react-router-dom";
import './index.scss';
import { CardMedia, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import polarDrippy from '../../assets/images/polar drippy.png';
import slimSteel from '../../assets/videos/slim steel.mp4';



const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, I'm
                    {/* <img src={} alt='developer'/> */}
                    <br />
                    Brayden
                    <br />
                    Web Developer
                </h1>
                <h2>Frontend Developer / Javascript Expert / Content Creator</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                <Container
                    className="mediaSlides"
                    spacing={4}
                    style={{
                        marginTop: '60px',
                        backgroundColor: 'black',
                        height: '256px'
                    }}
                >
                    <CardMedia md={4}
                        component='img'
                        image={polarDrippy}
                        alt="Can't Load Image"
                    />
                    <CardMedia md={4}>

                        <video controls 
                        width='100%'
                        height='100%'
                        >
                            <source src={slimSteel} type="video/mp4"/>
                        </video>

                    </CardMedia>
                </Container>
            </div>
        </div>
    )
}

export default Home;