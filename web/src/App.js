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
    const [editingId, setEditingId] = useState()

    useEffect(() => {

        api.get('contacts').then(response => {
            setContacts(response.data.contacts)
            setModal(false)
        })

    }, [])

    function addContact(contact) {

        setContacts([...contacts, contact])
        setModal(false)
    }

    function createModal() {
       setEditingId(null)
       
       modal ? setModal(false) : setModal(true)

    }

    async function deleteContact(id) {

        let contactsUpdated = contacts.filter(contact => contact._id !== id)

        const response = await api.delete(`contacts/${id}`).then(response => {
            setContacts(contactsUpdated)
        })
        
    }

    function updateContact(id) {

        setEditingId(id)
        modal ? setModal(false) : setModal(true)

    }

    function updateContacts(editContact) {
        let contactsUpdated = contacts.filter(contact => contact._id !== editContact._id)

        contactsUpdated.push(editContact)

        console.log(editContact)

        setContacts(contactsUpdated)
    }

    return (

        <div className="app">
            <Header />    

            <div className="contacts-list">
                <List 
                    contacts={contacts} 
                    deleteContact={deleteContact} 
                    updateContact={updateContact}
                /> 

                <Modal 
                    editId={editingId} 
                    editHandler={updateContact} 
                    addHandler={addContact}
                    show={modal} 
                    updateContactsHandler={updateContacts}
                />

                <button onClick={createModal} className="add-contact">

                        +

                </button>

            </div> 



        </div>

    )

}

export default App