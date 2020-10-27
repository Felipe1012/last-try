const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require("cors");


app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());


app.post('/stt',(req,res)=>{

   res.send("hola")
})

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})
