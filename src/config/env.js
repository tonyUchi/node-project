//require('dotenv').config(); --> forma antigua
import env from 'dotenv'
import envvar  from 'env-var';

env.config();

//const { get } = require('env-var'); --> esta es forma antigua hacemos la importacion arriba

export const envs = {
	PORT: envvar.get('PORT').required().asPortNumber(),
	PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

/*
module.exports = {
	envs
	esto es la forma antigua, ahora solo basta con anteponer export a lo que se quiera exportar
}*/