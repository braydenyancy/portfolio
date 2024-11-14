import React from "react";
import './css/Arcade.scss';

const Arcade = () => {
    return (
        <div className="arcadePage">
            <div className="arcadeInfo">
                <h4 className="arcadeTitle">
                    One of my first projects, this Arcade was created using only Javascript, CSS and HTML native.
                </h4>
            </div>

            <div className="Arcade">
                <iframe
                    title="ArcadeFrame"
                    src="https://bbarcade.netlify.app/"
                    width={'100%'}
                    height={'100%'}
                />
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <h4 className="phoneArcade">
                    Sorry! This is an old project, and isn't available on the portfolio for this screen size! Try the main site here!
                </h4>
                <a href="https://bbarcade.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '2rem',
                    color: 'whitesmoke'
                }}>
                    Open in New Tab!
                </a>
            </div>
        </div>
    )
}

export default Arcade;