import React, { useState, useEffect } from 'react'
import './List.scss'
import api from '../../services/api'

// Components
import Contact from '../Contact/Contact'

export default function List() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        api.get('/contacts').then(response => {
            setContacts(response.data.contacts)
        })
    }, [])

    function removeContact(id) {
        
        let contactsUpdated = contacts.filter(contact => contact._id !== id)

        setContacts(contactsUpdated)

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
                                            removeHandler={removeContact}/>
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