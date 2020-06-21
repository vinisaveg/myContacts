import React from 'react'
import './List.scss'
import Contact from '../Contact/Contact'

export default function List() {

    return (

        <>

        <div className="list">
            
            <div className="contacts-on-list">
                <Contact />
                <Contact />
                <Contact />
            </div>

            <div className="no-contacts-on-list">
                <span>You don't have any contact 😥. Try adding some !</span>
            </div>

        </div>

        <button className="add-contact">

            +

        </button>

        </>
    )

}