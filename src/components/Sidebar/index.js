import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import polarDrippy from '../../assets/images/polar drippy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDiagramProject, faEnvelope, faFolder, faFolderOpen, faGamepad, faHome, faShield, faShieldAlt, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import slimSteelin from '../../assets/videos/slimSteel.mp4';
import React, { useState } from 'react';


const Sidebar = (autoplay) => {

    const [isPlaying, setIsPlaying] = useState(autoplay);

    const [showLinks, setShowLinks] = useState(false);

    const videoRef = React.useRef(null)

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true)
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    }


    return (
        <div className='nav-bar'>


            <video className="pianoRoll" onClick={handlePlayPause} ref={videoRef} autoPlay={isPlaying} src={slimSteelin} muted loop playsInline></video>
            <nav>
                <NavLink exact="true" activeclassname="active" className="Home-link" to="/portfolio">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>

                <FontAwesomeIcon icon={faCode}
                    className="projectIcon"
                    onClick={() => setShowLinks(!showLinks)}
                />
                
                {showLinks && (
                    <NavLink exact="true" activeclassname="active" className="StaleFish-link" to="/StaleFish">
                        <FontAwesomeIcon icon={faShieldAlt} />
                    </NavLink>
                )}

                {showLinks && (
                    <NavLink exact="true" activeclassname="active" className="BBArcade-link" to="/Arcade">
                        <FontAwesomeIcon icon={faGamepad} />
                    </NavLink>
                )}

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
                </NavLink>

            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/braydenyancy/'>
                        <FontAwesomeIcon icon={faLinkedin} color="4d4de"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/braydenyancy'>
                        <FontAwesomeIcon icon={faGithub} color="4d4de"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCZfZi_Qxicp6Kn6_YrSVFIg'>
                        <FontAwesomeIcon icon={faYoutube} color="4d4de"></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;