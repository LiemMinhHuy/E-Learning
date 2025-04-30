require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const app = express()
const port = process.env.PORT || 3000

const route = require('./routes')
const db = require('./config/db')

// Security Middleware
app.use(helmet())
app.use(cors())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}))

// Basic Middleware
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'resources', 'views'))

// Database connection
db.connect()

// Routes
route(app)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500
        }
    })
})

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: {
            message: 'Not Found',
            status: 404
        }
    })
})

const server = app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})

// Graceful shutdown
process.on('SIGTERM', gracefulShutdown)
process.on('SIGINT', gracefulShutdown)

function gracefulShutdown() {
    console.log('Received shutdown signal')
    server.close(() => {
        console.log('Server closed')
        db.disconnect()
            .then(() => {
                console.log('Database connection closed')
                process.exit(0)
            })
            .catch(err => {
                console.error('Error during shutdown:', err)
                process.exit(1)
            })
    })
}