"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = "sUperpassw0rd!";
const someOtherPlaintextPassword = "pass123";

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) console.log(err);
    console.log(res); //true
  });
});

//END_ASYNC

//START_SYNC

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(hash);
console.log(result);

//END_SYNC

app.get("/", (request, response) =>
  response.sendFile(path.join(__dirname, "views", "index.html"))
);

app.use(express.static(path.join(__dirname, "public")));

const listener = app.listen(process.env.PORT || 3000, "localhost", () =>
  console.log(
    `Your app is listening at http://${listener.address().address}:${
      listener.address().port
    }`
  )
);
