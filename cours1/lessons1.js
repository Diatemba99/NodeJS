
//pour inclure un module
let http = require('http')
let fs = require('fs')
let url = require('url')
const EventEmitter = require('events')


// pour ne pas avoir a ecrire le meme code chaque fois
// on peut creer une fonction qui fera le job a notre place
let App ={
    start:function (port){
    let emmitter = new EventEmitter();
    let server = http.createServer((request,response) =>{
        response.writeHead(200,{       
              'Content-type' : 'text/html; charset=utf-8'

        })


    if (request.url === '/555') 
    {
        emmitter.emit('root', response)   
    }
    response.end()

    }).listen(port)

    return emmitter
    }
}

let app = App.start(80)
app.on('root',function (response){

    response.write('Bienvenu sur ma premiere page de NodeJS')
})

                         //creer un server
// let server = http.createServer()

// permet d'ecouter un peu comme un AddEventlistener
// resquest permet de recuperer  les infos

// server.on('request', function (request, reponse){

//     reponse.writeHead(200)
//    let query = url.parse(request.url, true).query
//    let nom = query.name === undefined ? 'go out fou': query.name

//     reponse.end('Bonjour'+ '  '+'Mr'+' ' +query.name)
//     if (query.name === undefined) {
//        reponse.write('Go out anonymous') 
//     }
//     else
//     {
//     reponse.write('Bonjour'+ '  '+'Mr'+' ' +query.name)
//     }
//     reponse.end()


  
// fs.readFile('pa.html','utf-8', function (err, data){
//     if (err) 
//     {
//         reponse.writeHead(404)
//         reponse.end('Desole ce fichier n\'existe pas waw ')
//     }
//     else
//     {
//         reponse.writeHead(200,{
//             'Content-type' : 'text/html; charset=utf-8'
//          }) 
//          data = data.replace('{{name}}', nom)
//          reponse.end(data)
//     }
//     })
// })

// server.listen(80)










//==================les evenements=================
//==================les evenements=================
//==================les evenements=================


//const EventEmitter = require('events')
// let mon = new EventEmitter()

// mon.once('saute', function(a,b){
//     console.log('J\' ai sauté',a,b)
// })
// mon.emit('saute',25,58)
// mon.emit('saute')
// mon.emit('saute')
// mon.emit('saute')
// mon.emit('saute')