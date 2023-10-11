import React from "react";
import './index.scss';

const Arcade = () => {
    return (
        <div>
            <div className="titleDiv">
                <h4 className="arcadeTitle">
                    This Arcade was created using only Javascript, CSS and HTML native.
                </h4>
            </div>

            <div className="Arcade">
                <iframe
                    title="ArcadeFrame"
                    src="https://bbarcade.netlify.app/"
                    width="1200px"
                    height="900px"
                    allowFullScreen
                />


            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '12%',
                width: '50vw'
            }}>
                <h4 className="phoneArcade">
                    Sorry! This isn't available on the phone right now!
                </h4>

            </div>
        </div>
    )
}

export default Arcade;