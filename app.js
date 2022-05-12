const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const { json } = require('express')
const app = express()

app.use(express.json())
app.use(cors())
//Establecemos los prámetros de conexión
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'viralanime'
})
//Conexión a la database
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("¡Conexión exitosa a la base de datos!")
    }
})
app.get('/', function(req,res){
    res.send('Ruta INICIO')
})

//Get animes
app.get('/api/viralAnime', (req,res)=>{
    conexion.query('SELECT * FROM animelist', (error,filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Get un solo anime
app.get('/api/viralAnime/:id', (req,res)=>{
    conexion.query('SELECT * FROM animelist WHERE id = ?', [req.params.id], (error, fila)=>{
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})

//Crear un anime
app.post('/api/viralAnime', (req,res)=>{
    let data = {status:req.body.status, id_anime:req.body.idAnime, username:req.body.userName, 
                title:req.body.title, img:req.body.img, score:req.body.score}
    let sql = "INSERT INTO animelist SET ?"
    conexion.query(sql, data, function(err, result){
            if(err){
               throw err
            }else{              
             /*Esto es lo nuevo que agregamos para el CRUD con Javascript*/
             Object.assign(data, {id: result.insertId }) //agregamos el ID al objeto data             
             res.send(data) //enviamos los valores                         
        }
    })
})

//Editar anime
app.put('/api/:username', (req, res)=>{
    let status = req.body.status
    let id_anime = req.body.idAnime
    let username = req.body.username
    let sql = "UPDATE animelist SET status = ? WHERE id_anime = ? AND username = ?" 
    conexion.query(sql, [status, id_anime, username], function(error, results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

//Editar anime
app.put('/api/viralAnime/:id', (req, res)=>{
    let id = req.params.id
    let status = req.body.status
    let sql = "UPDATE animelist SET status = ? WHERE id = ?"
    conexion.query(sql, [status, id], function(error, results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

//Get commentarios
app.get('/api/comment', (request,data)=>{
    conexion.query('SELECT * FROM commentsanime', (error,rows)=>{
        if(error){
            throw error
        }else{
            data.send(rows)
        }
    })
})

//Get comentarios filrado por id del anime
app.get('/api/comment', (req,res)=>{
    let id_anime = req.params.id_anime
    let sql = "SELECT * FROM commentsanime WHERE id = ? ORDER BY ID DESC"
    conexion.query(sql, [id_anime], function(error, result){
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})

//Crear un comentario
app.post('/api/comment', (req,res)=>{
    let data = {comment:req.body.comment, id_anime:req.body.idAnime, username:req.body.userName}
    let sql = "INSERT INTO commentsanime SET ?"
    conexion.query(sql, data, function(err, result){
            if(err){
               throw err
            }else{              
             Object.assign(data, {id: result.insertId })         
             res.send(data)                       
        }
    })
})


//variable de entorno con process.env para evitar conflito si el puerto 3000 esta ocupado
const puerto = process.env.PUERTO || 3000
app.listen(puerto, function(){
    console.log("Servidor Ok en puerto:"+puerto)
})