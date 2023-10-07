import React from "react";
import { CardMedia, Grid } from "@mui/material";
import polarDrippy from '../../assets/images/polar drippy.png';
import signInOut from '../../assets/videos/signInOutLocalCart.mp4';
import siteAndProduct from '../../assets/videos/siteAndProductPage.mp4';
import productList from '../../assets/videos/productList.mp4';
import './index.scss';


const StaleFish = () => {

    return (

        <div className="staleFishPage">
                <p className="summary">
                    A Summary of the project
                </p>
            <div className="containerRow">
                <div className="item">
                    <h4 className="staleTitles">
                        Sign in/out, plus local cart feature
                    </h4>
                </div>
                <div className="item">
                    <h4 className="staleTitles">
                        Site and Product Page
                    </h4>
                </div>
                <div className="item">
                    <h4 className="staleTitles">
                        Product List
                    </h4>
                </div>
                <div className="item">
                    <video className='videoBackground' autoPlay muted loop>
                        <source src={signInOut} />
                    </video>
                </div>
                <div className="item">
                    <video className='videoBackground' autoPlay muted loop>
                        <source src={siteAndProduct} />
                    </video>
                </div>
                <div className="item">
                    <video className='videoBackground' autoPlay muted loop>
                        <source src={productList} />
                    </video>
                </div>
                <div className="item">
                    <p className="p-text">
                        imagine he played it the entire time
                    </p>
                </div>
                <div className="item">
                    <p className="p-text">
                        this is another text box
                    </p>
                </div>
                <div className="item">
                    <p className="p-text">
                        the third column text
                    </p>
                </div>
            </div>

        </div>
    )

}

export default StaleFish;