import express from 'express'
import Controller from './controllers.js'

const controller = new Controller()

const routes = express.Router()

routes.get('/', controller.index)
routes.get('/show/:yearMonth', controller.show)

export default routes