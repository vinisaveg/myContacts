import React, { useState } from 'react'
import './Modal.scss'

import 'regenerator-runtime/runtime'
import api from '../../services/api'

function Modal({show, addHandler}) { 

    if(show === false){
        return null
    }

    const [contact, setContact] = useState({})

    function handleInputs(event) {

        let target = event.target

        let contactUpdated = {...contact}
        contactUpdated[target.name] = target.value

        setContact(contactUpdated)

    }

    async function createContact() {
        const response = await api.post('/contacts', contact).then(response => {
            let newContact = response.data
            addHandler(newContact)
        })

    }

    return (
        <div className="modal-card">

            <h2>Add a new contact</h2>

            <div className="inputs">
                
                <input name="name" onChange={handleInputs} placeholder="Name" type="text" required/>

                <input name="phone" onChange={handleInputs} placeholder="Phone"  type="text" required/>

            </div>

            <button onClick={createContact} type="submit">Add</button>

        </div>
    )

}

export default Modal