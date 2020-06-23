import React, { useState, useEffect } from 'react'
import './App.scss'

// Components
import Header from './components/Header/Header'
import List from './components/List/List'
import Modal from './components/Modal/Modal'

function App() {

    const [modal, setModal] = useState([false])

    function showModal() {

        setModal(prev => prev ? false : true)

        setPiolho('teste')

    }

    function addContact(contact) {

        console.log(contact)

    }

    return (

        <div className="app">
            <Header />    

            <div className="contacts-list">
                <List /> 

                <Modal show={modal} addHandler={addContact}/>

                <button onClick={showModal} className="add-contact">

                        +

                </button>

            </div> 



        </div>

    )

}

export default App