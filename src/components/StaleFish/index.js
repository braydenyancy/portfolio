import React from "react";
import { CardMedia, Grid } from "@mui/material";
import polarDrippy from '../../assets/images/polar drippy.png';
import signInOut from '../../assets/videos/signInOutLocalCart.mp4';
import siteAndProduct from '../../assets/videos/siteAndProductPage.mp4';
import productList from '../../assets/videos/productList.mp4';
import './index.scss';


const StaleFish = () => {

    return (

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
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
        </div>

    )

}

export default StaleFish;