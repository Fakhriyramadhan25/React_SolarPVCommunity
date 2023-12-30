const express = require('express');
const bodyparser = require ('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
// const eventRoute = require('./controllers/userRoutes.js');
const db = require('./models/config.js');
// const solarRoute= require('./controllers/solarRoutes.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

db.authenticate()
    .then(()=> console.log('Database Connected...'))
    .catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.json({'mssg':'Hi there'})
})

// app.use('/books', eventRoute);
// app.use('/solarpv', solarRoute);


app.listen(process.env.PORT,()=>{
    console.log("Working right at port "+process.env.PORT);
})

