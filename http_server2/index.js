const http = require('http');
const fs = require('fs');

// Carregar arquivos HTML na memória
const home = fs.readFileSync('home.html');
const quem_somos = fs.readFileSync('quem_somos.html');
const fale_conosco = fs.readFileSync('fale_conosco.html');
const not_found_404 = fs.readFileSync('not_found_404.html');

const server = http.createServer(
    (req, res) => {
        console.log('IP: ' + req.remoteAddress);
        console.log(req.url);

        switch (req.url) {
            case '/':
                res.end(home);
                break;
            case '/quem_somos':
                res.end(quem_somos);
                break;
            case '/fale_conosco':
                res.end(fale_conosco);
                break;
            default:
                console.log("Entrou no 404!");
                res.writeHead(404);
                res.end(not_found_404);
                break;
        }
    }
);

server.listen(3000, () => {
    console.log('*** Iniciando Aplicação Servidora ***');
    console.log('*** Digite CTRL+C para tirar o servidor do ar! ***)');
});
