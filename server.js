const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'})
fs.readFile('./public/index.html', function(error, data) {
    if(error) {
        res.write(404)
        res.write('Erreur : fichier pas trouvé')
    } else {
        res.write(data);
    }
    res.end();
})

})

server.listen(port, function(error) {
    if(error) {
        console.log('Il y a une erreur, votre serveur a été interrompue', error);
    } else {
        console.log('Youpi ! Ton serveur fonctionne sur le port : ' + port);
    }
})