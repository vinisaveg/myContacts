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

    return (

        <>   

            <div className="list">

                {contacts.length > 1 ? 
                            <div className="contacts-on-list">

                                {contacts.map(contact => (
                                    <Contact key={contact._id} 
                                            id={contact._id}
                                            name={contact.name} 
                                            phone={contact.phone}/>
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