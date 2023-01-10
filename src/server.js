import express from 'express'
import cors from 'cors'
import routes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.listen(8080, () => {
    console.log('Server is running on 8080');
})