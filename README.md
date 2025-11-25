🚀 Avaliação Prática – Fundamentos de JavaScript / Node.js

Este repositório contém os dois projetos desenvolvidos na Avaliação Prática 1, utilizando Node.js, módulos nativos (http e fs) e arquitetura Cliente-Servidor.

Foram criadas duas aplicações servidoras simples, conforme solicitado nos tutoriais fornecidos pelo professor.

📁 Estrutura do Repositório
avaliacao-nodejs/

 ├── http_server/
 
 │    ├── index.js
 
 │    └── package.json
 
 │
 
 └── http_server2/
 
      ├── index.js
      
      ├── package.json
      
      ├── home.html
      
      ├── quem_somos.html
      
      ├── fale_conosco.html
      
      └── not_found_404.html
      

🟦 Exercício Prático 1 – http_server

Este projeto demonstra:

Importação de módulo nativo http

Criação de um servidor básico

Resposta fixa em HTML direto no res.end()

Uso de callback com função anônima

▶️ Como executar

Dentro da pasta http_server:

npm start


ou

node index.js


Acesse no navegador:

http://localhost:3000/

🟩 Exercício Prático 2 – http_server2

Servidor HTTP que retorna páginas HTML estáticas utilizando:

http.createServer()

fs.readFileSync()

Estrutura de rotas com switch

Página 404 personalizada

▶️ Como executar

Dentro da pasta http_server2:

npm start


ou

node index.js


Rotas disponíveis:

/               → home.html  
/quem_somos     → quem_somos.html
/fale_conosco   → fale_conosco.html
(qualquer outra) → not_found_404.html

🧰 Tecnologias Utilizadas

Node.js

Módulo nativo http

Módulo nativo fs

JavaScript (CommonJS)

📦 Como instalar dependências?

Os projetos usam apenas módulos nativos, portanto não é necessário instalar nada via npm.
