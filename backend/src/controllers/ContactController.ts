import {Request, Response} from 'express'
import Contact from '../models/Contact.model'

const ContactController = {

    async create(request: Request, response: Response) {
        let contact  = request.body
        
        let newContact = await Contact.create(contact)

        return response.status(201).json(newContact)
    },

    async read(request: Request, response: Response) {

        let contacts = await Contact.find()

        return response.json({contacts: contacts})

    },

    async update(request: Request, response: Response) {

        let contactId = request.params.id
        let contactUpdates = request.body

        let contactUpdated = await Contact.findByIdAndUpdate(
            contactId,
            contactUpdates,
            { new: true }
        )

        return response.status(200).json(contactUpdated)

    },

    async delete(request: Request, response: Response) {

        let contactId = request.params.id

        await Contact.findByIdAndDelete(contactId)

        return response.status(200).send({
            message: "Contact deleted"
        })

    }

}

export default ContactController