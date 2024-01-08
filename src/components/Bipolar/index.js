import React from "react";
import './index.scss';
import BipolarLandingPage from '../../assets/videos/BipolarLandingPage.mp4';
import BipolarSiteTransitions from '../../assets/videos/BipolarSiteTransitions.mp4';
import BipolarArtistPage from '../../assets/videos/BipolarArtistPage.mp4';

const Bipolar = () => {
    return (
        <div className="projectPage">
            <div className="projectInfo">

                <div className="projectTitleDiv">
                    <h4 className="projectTitle">
                        Bipolar IO, a new media application.
                    </h4>
                    {/* <h4 className="projectTitle">
                        About this Project
                    </h4> */}
                    <p className="summary">
                        Bipolar Entertainment is a start up that I am helping to create with a small team of developers.
                        The goal is to create a new and interactable music experience within the media industry.
                    </p>
                </div>
                <div className="containerRow">
                    <div className="item">
                        <h4 className="projectTitles">
                            Landing Page
                        </h4>
                    </div>
                    <div className="item">
                        <h4 className="projectTitles">
                            Transitions and Sneak Peak
                        </h4>
                    </div>
                    <div className="item">
                        <h4 className="projectTitles">
                            Artist Page
                        </h4>
                    </div>
                    <div className="item">
                        <video className='videoBackground' autoPlay muted loop playsInline>
                            <source src={BipolarLandingPage} />
                        </video>
                    </div>
                    <div className="item">
                        <video className='videoBackground' autoPlay muted loop playsInline>
                            <source src={BipolarSiteTransitions} />
                        </video>
                    </div>
                    <div className="item">
                        <video className='videoBackground' autoPlay muted loop playsInline>
                            <source src={BipolarArtistPage} />
                        </video>
                    </div>
                    <div className="item">
                        <p className="p-text">
                            With custom CSS and a team of graphic designers, the landing page is a unique introduction to the new web application.
                        </p>
                    </div>
                    <div className="item">
                        <p className="p-text">
                            Using TypeScript and React/Redux frameworks on the front end, we display and create a new, interactable experience for the user while they explore the labels featured and upcoming artists.
                        </p>
                    </div>
                    <div className="item">
                        <p className="p-text">
                            I created an Artist page that displays the artists biography, interesting information about them, and their respective discographys. It's responsive design allows for a suitable experience on any screen size.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bipolar;