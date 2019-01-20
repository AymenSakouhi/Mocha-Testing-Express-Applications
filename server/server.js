const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        name: 'Hello World!'
    });
});


app.get('/users', (req, res) => {
   res.status(200).send([
       {
           name: "Aymen",
           age: 24
       },
       {
           name: "Mohamed",
           age: 24
       }
   ])
});

app.listen(3000, ()=> {
    console.log("server started on port 3000");
});

module.exports.app = app;