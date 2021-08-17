const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

//SET Port
const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)
app.listen(port, () => console.log(`Listening on port ${port}`))

//Routes
const newsRouter = require('./src/routes/index')

app.use('/', newsRouter)


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended : true }))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')


function normalizePort(val) {
    const port = parseInt(val, 10)
    
    if (isNaN(port)) {
        // named pipe
        return val
    }
    
    if (port >= 0) {
        // port number
        return port
    }
    
    return false
}