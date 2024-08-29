import express from 'express'
import  bodyParser from 'body-parser'
import mongoose from 'mongoose'
import usersRoutes from './src/Routes/usersRoutes.js'
import productsRoutes from './src/Routes/productsRoutes.js'
import authRoutes from './src/Routes/authRoutes.js'

const app = express()
const port = 6000

app.use(express.json());

const url = "mongodb+srv://zahidilyas589:corelogic@book.tx77n.mongodb.net/Food_System?retryWrites=true&w=majority&appName=book"

async function connectDB() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, // 30 seconds
        });
        console.log('Connected successfully to MongoDB')
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err)  
    }
}
await connectDB()


app.use('/', usersRoutes)//this route is use to add user data

app.use('/', productsRoutes)//this route is use to add products

app.use('/', authRoutes)//this route is use to login

app.use('/', authRoutes)//this route is use to signUp

app.use('/', usersRoutes)//this route is use to getAllUser

app.listen(port,()=>{
    console.log(`server is running on localhost:${port}`)
})