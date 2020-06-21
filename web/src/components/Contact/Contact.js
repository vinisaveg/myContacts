import React from 'react'
import phoneIcon from '../../assets/icons/phone-icon.svg'
import './Contact.scss'

import pencilIcon from '../../assets/icons/pencil-icon.svg'
import binIcon from '../../assets/icons/bin-icon.svg'

function Contact() {

    return (
        <div className="contact-card">

            <div className="phone-marker">

                <img src={phoneIcon} alt="Phone icon"/>

            </div>

            <div className="contact-name">
                <p>Vinicius</p>
            </div>
            
            <div className="contact-phone">
                <p>951265392</p>
            </div>

            <div className="actions">
                <button className="edit">
                    <img src={pencilIcon} alt="Edit Icon"/>
                </button>

                <button className="delete">
                    <img src={binIcon} alt="Delete Icon"/>
                </button>
            </div>
        </div>
    )

}

export default Contact