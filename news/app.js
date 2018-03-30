const express=require('express');

const mysql=require('mysql');

const static = require('express-static');

const app=express()

const pool=mysql.createPool({
    host:'localhost',  
    user:'root',       
    password:'', 
    database:'item',    
    port:3306          
})
app.use('/',(req,res,next)=>{   
  res.setHeader('Access-Control-Allow-Origin','*')

 pool.getConnection((err,connection)=>{
        if(err) throw err;
  connection.query('SELECT * FROM news',(err,rows)=>{
         if (err) throw err;
            console.log(rows)
        res.send(rows);

  })
 })

})
app.use(static('./'));


app.listen(8002,()=>{
console.log('OK')
})

