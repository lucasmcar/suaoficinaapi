const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', () => {

} );


app.listen(4444,() => {
    console.log("Rodando...");
})