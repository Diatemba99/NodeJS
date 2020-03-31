let fs = require('fs')

  let file = 'v1.mp4'
    
    fs.stat(file, (err, stat)=>
    {
       let total = stat.size
       let progression = 0


    // introduction du script qui permet de lire
     let read= fs.createReadStream(file)
     let write = fs.createWriteStream('copy.mp4')
     let write2 = fs.createWriteStream('copy2.mp4')

        read.on('data', (chunk) =>
        {
           progression+= chunk.lenght
           console.log("i read " + Math.round(100* progression / total) + "%")
           
            // console.log('i read it welll'+ chunk.lenght)
        })
        read.pipe(write)
        read.pipe(write2)

        write.once('finish',()=>
        {
            console.log('le fichier a bien ete copie')
        })
        // read.on('end', () =>
        // {
        //  console.log('Le fichier a ete bien lu')
        // })
    })
    
   































// fs.readFile('v1.mp4', (err, data) =>
//      {
//         if (err)  throw err
//         fs.writeFile('copy.mp4', data, (err)=>
//          {
//             if (err) throw err
//             console.log('fichier well done')
//          })
//      })