import React from 'react'
import phoneIcon from '../../assets/icons/phone-icon.svg'
import pencilIcon from '../../assets/icons/pencil-icon.svg'
import binIcon from '../../assets/icons/bin-icon.svg'
import './Contact.scss'

import api from '../../services/api'

function Contact({ name, phone, id }) {

    function deleteContact() {
        console.log(id)

        api.delete(`contacts/${id}`).then(response => {
            console.log(response)
        })
    }

    return (
        <div className="contact-card">

            <div className="phone-marker">

                <img src={phoneIcon} alt="Phone icon"/>

            </div>

            <div className="contact-name">
                <p>{ name }</p>
            </div>
            
            <div className="contact-phone">
                <p>{ phone }</p>
            </div>

            <div className="actions">
                <button className="edit">
                    <img src={pencilIcon} alt="Edit Icon"/>
                </button>

                <button onClick={deleteContact} className="delete">
                    <img src={binIcon} alt="Delete Icon"/>
                </button>
            </div>
        </div>
    )

}

export default Contact