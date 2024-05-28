import express from 'express'
//const express = require('express')
import  path  from 'path'
//const path = require ('path')

export const startServer = (options) => {
	const { port, public_path = 'public'} = options

	const app = express()
	app.use(express.static(public_path))//contenido estatico
	
	app.get('*', (req, res) => {
		const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
		res.sendFile(indexPath)
})

	app.listen(port, () => {
		console.log(`Escuchando en el puerto ${port}`)
})
}

/*
module.exports = {
	startServer
}

esto no se incluye para las versiones actuales
*/