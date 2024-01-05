import React from "react";
import './index.scss';
import { NavLink } from "react-router-dom";
import StaleFishSnippet from '../../assets/videos/siteAndProductPage.mp4';
import ArcadeSnippet from '../../assets/videos/ArcadeSnippet.mp4';

const Projects = () => {
    return (
        <div className="ProjectsPage">
            <h1 className="ProjectsHeader">My Projects</h1>
            <div className="ProjectsGrid">
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
            </div>
        </div>
    )
}

export default Projects;