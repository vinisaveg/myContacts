"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createContact(request, response) {
    // let {name, phone} = request.body
    // let newContact: Contact = {
    //     name,
    //     phone
    // }
    // Connect to DB to insert new Contact
    response.json({ message: "Hello" });
}
exports.default = createContact;
