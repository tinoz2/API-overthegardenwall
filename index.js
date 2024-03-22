import express from 'express'
import morgan from 'morgan'
import ApiRoute from './route.js'
import cors from 'cors'

const app = express()
const PORT = 8080

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/api', ApiRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})