import React, { useState, useEffect } from 'react'
import './List.scss'

// Components
import Contact from '../Contact/Contact'

export default function List({ contacts, deleteContact, updateContact }) {

    function removeContact(id) {
        deleteContact(id)

    }

    function editContact(id) {
        updateContact(id)
    }

    return (

        <>   

            <div className="list">

                {contacts.length > 0 ? 
                            <div className="contacts-on-list">

                                {contacts.map(contact => (
                                    <Contact key={contact._id} 
                                            id={contact._id}
                                            name={contact.name} 
                                            phone={contact.phone}
                                            removeHandler={removeContact}
                                            editHandler={editContact}
                                            />
                                ))}        
                            
                            </div>
                        
                        :
                        
                        <div className="no-contacts-on-list">
                            <span>You don't have any contact 😥. Try adding some !</span>
                        </div>
                }                

            </div>

        </>
    )

}