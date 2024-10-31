const cors  = require('cors');
const express = require('express');
const dotenv = require('dotenv');

//load environment on env file
dotenv.config();
//create application

const app = express();
//set up port 
const PORT  = process.env.PORT || 5000

//middleware
app.use(cors());//enables our cors 
app.use(express.json());//passes jason request body 

//sample API endpoint URL 

app.get('/api/data',(req, res) => {
    res.json({message:"Hello from backend"}); //here we declare what should be got as a response after the request has been made 

});

app.get('/api/',(req, res) => {
    res.json({message:"Hello from the other side"}); //here we declare what should be got as a response after the request has been made 

});

app.listen(PORT,()=>{
    console.log(`hi there pretty thing, server is running on http://localhost: ${PORT }`)
});
