import express from 'express'
import Controller from './controllers.js'

const controller = new Controller()

const routes = express.Router()

routes.get('/', controller.read)

export default routes