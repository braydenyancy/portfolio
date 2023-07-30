import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import polarDrippy from '../../assets/images/polar drippy.png'
import brayden from '../../assets/images/braydenName.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className="logo" to='/'>
                <img src={polarDrippy} alt="logo" />
                <img className="sub-logo" src={brayden} alt="name" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar;