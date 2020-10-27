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

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/2c86099d-5a2e-4191-a375-797ec3d1b2d6/v1/recognize',
      'headers': {
        'Content-Type': 'audio/flac',
        'Authorization': 'Basic YXBpa2V5OnBGdWs2V2REaDFxckdJeFVXQXY1NXFqREFOVGQzdmlsa1AzdVZDc1ZqVUdq'
      },
      body: req.body.audio
    };
/*
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);

    });
*/
    res.send(req.body.audio)

})

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})
