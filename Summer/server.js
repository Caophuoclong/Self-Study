const express = require('express');
const fs = require('fs');
const mongo = require('mongodb');


const url = "mongodb://localhost:27017/";
const db_name = "test";
app = express();
const port = 8080;
let data = [
        {name:"PhuocThanh", age:"12",mobile:"0326031442"},
        {name: "Khanh Van", age: "18",mobile:"0973906464"},
        {name: "Man", age: "20", mobile:"PhuocLong"}

    ];
function insert(){
mongo.connect(url,(err, client)=>{ // connect database 
    if (err) throw err;
    console.log("Connect database successfully!");
    const db = client.db(db_name); // connect into database name
    db.collection("Summer").insertMany(data,(error, collection)=>{ // connect collection name and add data;
        if (error) throw error;
        console.log("Insert data successfully!");
        console.log(collection);
    })
})
};

function delete1(){
    mongo.connect(url,(err, client)=>{ // connect database 
    if (err) throw err;
    console.log("Connect database successfully!");
    let query = {name: "PhuocThanh"};
    const db = client.db(db_name); // connect into database name
    db.collection("Summer").deleteOne(query,(error, collection)=>{ // connect collection name and add data;
        if (error) throw error;
        console.log("Delete data successfully!");
        console.log(collection);
    });
});
};
delete1();


app.get('/', (req, res) => {
    res.send("xinchao");
});

app.get('/signin', (req, res) => {
    let user = req.query.user;
    let password = req.query.password;
    console.log("Username: " + user + "\nPassword: " + password);
    if (user === "caophuoclong")
        res.send("This is demo of signup page");
    else
        res.send("Login failed");

})

app.listen(port, () => {
    console.log('App is running on ' + port);
})