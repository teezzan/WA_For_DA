const fs = require('fs');
const express = require('express');
const app = express();
let you

const sulla = require('sulla');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', express.static('static'))

app.post('/sendall', (req, res) => {
  try {
    console.log(req.body)
<<<<<<< HEAD
    phones = req.body.phones
    phones ="8168494355"
    msg = req.body.msg
    msg = "sullah"
    console.log(msg, phones)
=======
//    phones = req.body.phones
	phones ="8168494355";
  //  msg = req.body.msg
    msg = "sullah";
   // console.log(msg, phones)
>>>>>>> 0d7f1eea6a16e44cea273b693b89187120954f1e

    // for (i = 0; i < phones.length; i++) {
      you.sendText(`234${phones}@c.us`, msg)
        .then(d => {
          console.log(d, phones)
        })
        .catch(e => {
          console.log(e, phones)
        })

    // }
    res.json({
      success: true,
    })
  } catch (error) {
    res.json({
      success: false,
      error
    })

  }

})


const server = app.listen(process.env.PORT || 5000, () => {
  sulla.create().then((client) => you = client);
});

