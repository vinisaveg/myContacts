import React from 'react'
import phoneIcon from '../../assets/icons/phone-icon.svg'
import pencilIcon from '../../assets/icons/pencil-icon.svg'
import binIcon from '../../assets/icons/bin-icon.svg'
import './Contact.scss'

function Contact({ name, phone, id, removeHandler, editHandler }) {

    function deleteContact() {

        removeHandler(id)

    }

    function upadateContact() {

        editHandler(id)

    }

    return (
        <div className="contact-card">

            <div className="phone-marker">

                <img src={phoneIcon} alt="Phone icon"/>

            </div>

            <div className="contact-infos">

                <div className="contact-name">
                    <span className="label">Name</span>
                    <p>{ name }</p>
                </div>
                
                <div className="contact-phone">
                    <span className="label">Phone</span>
                    <p>{ phone }</p>
                </div>
            </div>

            <div className="actions">
                <button onClick={upadateContact} className="edit">
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