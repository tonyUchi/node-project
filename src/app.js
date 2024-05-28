//const { envs } = require('./config/env') --> esta es la manera antigua
import { envs } from './config/env.js' // --> esta es la manera nueva
//const { startServer} = require('./server/server')
import { startServer }  from './server/server.js'

const main = () => {
	startServer({
		port: envs.PORT,
		public_path: envs.PUBLIC_PATCH
})
}

//funcion agnostica autoconvocada, la ejecutamos con los parentesis

(async() => {
	main()
})()