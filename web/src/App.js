import React, { useState, useEffect } from 'react'
import './App.scss'
import api from './services/api'

// Components
import Header from './components/Header/Header'
import List from './components/List/List'
import Modal from './components/Modal/Modal'

function App() {

    const [modal, setModal] = useState([])
    const [contacts, setContacts] = useState([])

    useEffect(() => {

        api.get('contacts').then(response => {
            setContacts(response.data.contacts)
            setModal(false)
        })

    }, [])

    function showModal() {

        setModal(prev => prev ? false : true)

    }

    function addContact(contact) {

        setContacts([...contacts, contact])
        setModal(false)
    }

    async function deleteContact(id) {

        let contactsUpdated = contacts.filter(contact => contact._id !== id)

        const response = await api.delete(`contacts/${id}`).then(response => {
            setContacts(contactsUpdated)
        })
        
    }

    return (

        <div className="app">
            <Header />    

            <div className="contacts-list">
                <List contacts={contacts} deleteContact={deleteContact}/> 

                <Modal show={modal} addHandler={addContact}/>

                <button onClick={showModal} className="add-contact">

                        +

                </button>

            </div> 



        </div>

    )

}

export default App