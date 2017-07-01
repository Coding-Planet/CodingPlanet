const express = require('express');
const fs = require('fs');
const mysql= require('mysql');
var bodyParser =require('body-parser');





const app = express();

app.set('port',4050);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const host = "localhost"
const user = "root"
const pswd = ""
const dbname = "coding_planet";


/**/


// config db ====================================
const pool = mysql.createPool({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname,
  timezone: 'ist',
  multipleStatements:true
});


/**/


/**/
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {

console.log(req.body);
let data = {};
data.name = req.body.name;
data.email = req.body.email;
data.query = req.body.query;
const values = [req.body.name,req.body.email, req.body.query];


 let query='INSERT INTO contact SET ?;';

    pool.query(query,data,function(err,result){

      
      if(!err){
        console.log('success '+result.affectedRows);
        res.json({"status":200});

      }
      else
      {
        res.json({"status":100,
                  "Error":err});
        console.log(err);
      }

    })



});



/**/



/**/

app.post('/api/post', (req, res) => {

let data = {};
data.title = req.body.title;
data.category = req.body.category;
data.content = req.body.content;
data.created_on=req.body.created_on;
data.author=req.body.author;


 let query='INSERT INTO post SET ?;';

    pool.query(query,data,function(err,result){

      
      if(!err){
        console.log('success '+result.affectedRows);
        res.json({"status":200});

      }
      else
      {
        res.json({"status":100,
                  "Error":err});
        console.log(err);
      }

    })



});



/**/


/**/

app.post('/api/question', (req, res) => {

let data = {};
data.question = req.body.question;
data.category = req.body.category;
data.solution = req.body.solution;
data.created_on=req.body.created_on;
data.author=req.body.author;
data.resource=req.body.resource;


 let query='INSERT INTO question SET ?;';

    pool.query(query,data,function(err,result){

      
      if(!err){
        console.log('success '+result.affectedRows);
        res.json({"status":200});

      }
      else
      {
        res.json({"status":100,
                  "Error":err});
        console.log(err);
      }

    })



});



/**/

/**/

app.post('/api/forum_post', (req, res) => {

let data = {};
data.question = req.body.question;
data.created_on=req.body.created_on;
data.author=req.body.author;


 let query='INSERT INTO forum_post SET ?;';

    pool.query(query,data,function(err,result){

      
      if(!err){
        console.log('success '+result.affectedRows);
        res.json({"status":200});

      }
      else
      {
        res.json({"status":100,
                  "Error":err});
        console.log(err);
      }

    })



});



/**/


/**/

app.get('/api/post', (req, res) => {


  const off = req.query.offset;
  const val=[off];

 let quer=`SELECT * FROM post LIMIT 10 OFFSET ${off};`;

    pool.query(quer,val,function(err,result){

      
      if(!err){
        console.log('success '+result.affectedRows);
        res.json({"status":200,
                  "result":result});

      }
      else
      {
        res.json({"status":100,
                  "Error":err});
        console.log(err);
      }

    })



});



/**/


/**/

app.get('/api/question', (req, res) => {


  const off = req.query.offset;

 let quer=`SELECT * FROM question LIMIT 10 OFFSET ${off};`;

    pool.query(quer,function(err,result){

      
      if(!err){
        console.log('success '+result.affectedRows);
        res.json({"status":200,
                  "result":result});

      }
      else
      {
        res.json({"status":100,
                  "Error":err});
        console.log(err);
      }

    })



});



/**/


/**/

app.get('/api/forum_post', (req, res) => {


  const off = req.query.offset;

 let quer=`SELECT * FROM forum_post LIMIT 10 OFFSET ${off};`;

    pool.query(quer,function(err,result){

      
      if(!err){
        console.log('success '+result.affectedRows);
        res.json({"status":200,
                  "result":result});

      }
      else
      {
        res.json({"status":100,
                  "Error":err});
        console.log(err);
      }

    })



});



/**/







app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
