const Hapi = require('@hapi/hapi')
require('./configs/env')

const routes = require('./routes')

const server = () => {

    const hapiServer = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || ' '
    })

    hapiServer.route(routes)

    return hapiServer

}

process.on('unhandledRejection', err => {
    console.log('---->  Deu ruim !') //colocar uma exception Aqui!!!!
    console.error(err)
    process.exit(1)
})

module.exports = server()