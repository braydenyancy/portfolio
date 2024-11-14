import React from "react";
import './css/Projects.scss';
import { NavLink } from "react-router-dom";
import StaleFishSnippet from '../../assets/videos/siteAndProductPage.mp4';
import ArcadeSnippet from '../../assets/videos/ArcadeSnippet.mp4';
import BipolarLoading from '../../assets/videos/BipolarLoading.mp4';

const Projects = () => {
    return (
        <div className="ProjectsPage">
            {/* <h1 className="ProjectsHeader">My Projects</h1> */}
            {/* <div className="ProjectsGrid"> */}
                <div className="BipolarProject">
                    <video className='ProjectVideoBackgroundBipolar' autoPlay muted loop playsInline>
                        <source src={BipolarLoading} />
                    </video>
                    <NavLink exact="true" activeclassname="active" className="ProjectLink" to="/Bipolar">
                        <h1 className="ProjectsTitle">Bipolar Media</h1>
                    </NavLink>
                </div>
                <div className="StaleFishProject">
                    <video className='ProjectVideoBackground' autoPlay muted loop playsInline>
                        <source src={StaleFishSnippet} />
                    </video>
                    <NavLink exact="true" activeclassname="active" className="ProjectLink" to="/StaleFish">
                        <h1 className="ProjectsTitle">StaleFish</h1>
                    </NavLink>
                </div>
                <div className="ArcadeProject">
                    <video className='ProjectVideoBackground' autoPlay muted loop playsInline>
                        <source src={ArcadeSnippet} />
                    </video>
                    <NavLink exact="true" activeclassname="active" className="ProjectLink" to="/Arcade">
                        <h1 className="ProjectsTitle">Arcade</h1>
                    </NavLink>
                </div>
                {/* <div className="ArcadeProject">
                    <video className='ProjectVideoBackground' autoPlay muted loop playsInline>
                        <source src={ArcadeSnippet} />
                    </video>
                    <NavLink exact="true" activeclassname="active" className="ProjectLink" to="/Arcade">
                    <h1 className="ProjectsTitle">Arcade</h1>
                    </NavLink>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default Projects;