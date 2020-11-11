const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require("cors");
const fs=require('fs');

function stt(input){
    return new Promise(function (resolve, reject) {
    var audio = input
 
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/2c86099d-5a2e-4191-a375-797ec3d1b2d6/v1/recognize',
      'headers': {
        'Content-Type': 'audio/flac',
        'Authorization': 'Basic YXBpa2V5OnBGdWs2V2REaDFxckdJeFVXQXY1NXFqREFOVGQzdmlsa1AzdVZDc1ZqVUdq'
      },
      body: audio
    };
      console.log(audio)
  
    request(options, function (error, response) {
        console.log("funciona")

      if (error) throw new Error(error);
      console.log(response.body);
      return resolve(response.body)
    });


      });
}

module.exports=stt;
