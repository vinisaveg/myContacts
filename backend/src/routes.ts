import express from 'express'
import ContactController from './controllers/ContactController'

const routes = express.Router()

routes.post('/contacts', ContactController.create)
routes.get('/contacts', ContactController.read)
routes.put('/contacts/:id', ContactController.update)
routes.delete('/contacts/:id', ContactController.delete)

export default routes