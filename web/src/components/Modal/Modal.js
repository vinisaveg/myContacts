import React, { useState } from 'react'
import './Modal.scss'

import 'regenerator-runtime/runtime'
import api from '../../services/api'

function Modal({show, addHandler, editId, editHandler, updateContactsHandler}) { 

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

    async function editContact() {

        const response = await api.put(`contacts/${editId}`, contact)
            .then(response => {
                let contactUpdated = response.data
                editHandler(editId)
                contactUpdated._id = editId
                updateContactsHandler(contactUpdated)
        })

    }

    return (
        <div className="modal-card">

            {editId ?
                <h2>Edit contact</h2>  
                    :
                <h2>Add a new contact</h2>   
            }

            <div className="inputs">
                
                <input name="name" onChange={handleInputs} placeholder="Name" type="text" required/>

                <input name="phone" onChange={handleInputs} placeholder="Phone"  type="text" required/>

            </div>

            {editId ? 
                <button onClick={editContact} type="submit">Update</button>             
                    :
                <button onClick={createContact} type="submit">Add</button>
            }


        </div>
    )

}

export default Modal