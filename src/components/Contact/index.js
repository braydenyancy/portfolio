import React from "react";
import './index.scss'
import resume from '../../assets/resume/braydenResumeTech.pdf'

const Contact = () => {

    return (
        <div className="contactPage">
            {/* <div className="resumeDiv">
                <iframe className="resumePDF"
                title="Brayden Yancy Resume"
                src={resume}
                />
            </div> */}

                <div className="contactInfoDiv">
                    <ul>
                        <h2 className="contactInfo">
                            Email: yancy.brayden@gmail.com
                        </h2>
                    </ul>
                    <ul>
                        <h2 className="contactInfo">
                            Phone Number: 210-393-2033
                        </h2>
                    </ul>
                </div>
        </div>
    )

}

export default Contact;