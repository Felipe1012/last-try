const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require("cors");
const fs=require('fs');

app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());


app.post('/stt',(req,res)=>{


  var audio = req
 
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/91df89db-0ff2-47b9-825d-1b9c1f3c63ec/v1/recognize',
      'headers': {
        'Content-Type': 'audio/flac',
        'Authorization': 'Basic cUuWROj6dQ7HUL74Z0-Z9N4IupqemsBmag0cCWwMEscy'
      },
      body: audio
    };

    console.log(req)

    res.send("holaaa")


/*
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      res.send(response.body)
    });
*/
})

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})
