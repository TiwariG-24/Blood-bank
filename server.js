const express = require('express');
const dotenv = require('dotenv');
const colors  = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./conifg/db');
const path  = require('path')
// dotenv config
dotenv.config();

connectDB();
// rest object
const app = express(); //app now has all functionalities of express
//port
const PORT  = process.env.PORT || 8080;
//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//route
app.use('/api/v1/test',require('./routes/testroutes'))
app.use('/api/v1/auth',require('./routes/authRoutes'))
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'))
app.use('/api/v1/admin', require('./routes/adminRoutes'))
//listen
app.use(express.static(path.join(__dirname,'./client/build')))

app.get("*",function(req,res){
    res.sendFile(path.resolve(__dirname,"./client/build/index.html"))
})
app.listen(PORT, () =>{
    console.log('Node server running In ${process.env.DEV_MODE} mode on PORT ${process.env.PORT}');
});