// Tabnine::config

//server codes index.js
const fs = require('fs') //filestream
const express = require('express');
const app = express(); //listining right now
app.listen(3000, () => console.log("listening at 3000")); //3000 de dinleyeceğim
app.use(express.static('public'));//kullanıcı tarafından erişilebilecek dosya 'public'dir.
app.use(express.json({limit:"1mb"}));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter 
//---2.3--- post data and recive data 


 

var Datastore = require('nedb'), db = new Datastore({filename : 'database'});
db.loadDatabase();



app.post('/api', (request, response) => {
  console.log("request geldi");
  db.insert(request.body);
});

// db.find({year : 1922}, function (err,docs){ console.log(docs); });

// app.post('/api', (request, response) => {//hold incoming data
//     console.log("I got request");
//     const data = request.body;
//     const timestamp = Date.now();
//     data.timestamp = timestamp;
//     database.insert(data); 

 
    
//     // console.log(data);//write to server side(write in cmd) what is the data 
//     response.json({
//         message:"success",
//         timestamp:timestamp,
//         latitude:data.latitude,
//         longitude:data.longitude
//     });
// }); //request:istekte bulunduğum sayfanın tüm özellikeri, response: send this back to client
 
 


