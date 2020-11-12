const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require("cors");
const fs = require('fs');
const { mainModule } = require('process');
const stt = require('./stt');
const callNLUnderstanding = require('./nlu');
const params = require("./params");
const proDataNL = require("./proDataNL");

app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());


app.post('/stt', (req, res) => {
  console.log("jelo")
  var audio = req

  try {
    let finalJson = []

    stt(audio).then((ans) => {
      console.log("este si")
      callNLUnderstanding(params, ans).then((respuesta) => {
        console.log("primero")
        proDataNL(respuesta).then((finalRes) => {
          console.log("segundo")
          finalJson.push(finalRes)
          res.send(finalRes)
        })
      })
    })
  } catch (err) {
    res.status(500).json({ message: "No se pudo analizar el audio ingresado" });
  }
})

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
