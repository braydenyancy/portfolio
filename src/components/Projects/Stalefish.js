import React from "react";
import { CardMedia, Grid } from "@mui/material";
import polarDrippy from '../../assets/images/polar drippy.png';
import signInOut from '../../assets/videos/signInOutLocalCart.mp4';
import siteAndProduct from '../../assets/videos/siteAndProductPage.mp4';
import productList from '../../assets/videos/productList.mp4';
import './css/Projects.scss';


const StaleFish = () => {

    return (

        <div className="projectPage">
            <div className="projectInfo">

                <div className="projectTitleDiv">
                    <h4 className="projectTitle">
                        This is StaleFish, an eCommerce site.
                    </h4>
                    <p className="summary">
                        It features skateboards, trunks, wheels, barrings and more... I helped build this as a group project for my UTD Bootcamps capstone final. It is a full stack project that uses PostgreSQL, Javascript, React, Express and Morgan.
                    </p>
                </div>
                <div className="containerRow">
                    <div className="item">
                        <h4 className="projectTitles">
                            Sign in/out, plus local cart feature
                        </h4>
                    </div>
                    <div className="item">
                        <h4 className="projectTitles">
                            Site and Product Page
                        </h4>
                    </div>
                    <div className="item">
                        <h4 className="projectTitles">
                            Product List
                        </h4>
                    </div>
                    <div className="item">
                        <video className='videoBackground' autoPlay muted loop playsInline>
                            <source src={signInOut} />
                        </video>
                    </div>
                    <div className="item">
                        <video className='videoBackground' autoPlay muted loop playsInline>
                            <source src={siteAndProduct} />
                        </video>
                    </div>
                    <div className="item">
                        <video className='videoBackground' autoPlay muted loop playsInline>
                            <source src={productList} />
                        </video>
                    </div>
                    <div className="item">
                        <p className="p-text">
                            Using JWT for local storage, users can create a cart while signed in or out, and add to the cart while signed in / out.
                        </p>
                    </div>
                    <div className="item">
                        <p className="p-text">
                            On the front end we use React, MUI and native CSS to create a free flowing experience for the user.
                        </p>
                    </div>
                    <div className="item">
                        <p className="p-text">
                            We created a Database and API for the backend, that makes asynchronous calls to display products on the front end.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default StaleFish;