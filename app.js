const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require("cors");
const fs = require('fs');
const { mainModule } = require('process');
const stt = require('./stt');

app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());


app.post('/stt',  (req, res)=> {
console.log("jelo")
var audio = req

  try {

     stt(audio).then((ans) => {
      res.send(ans)
    })
  } catch (err) {
    res.status(500).json({ message: "No se pudo analizar el audio ingresado" });
  }
})

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
