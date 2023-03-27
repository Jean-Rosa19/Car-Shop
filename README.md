# Car-Shop:

## Desenvolvimento

Nesse projeto foi desenvolvida uma API RESTful utilizando a arquitetura MSC (Model-Service-Controller), orientação a objetos e NoSQL, através de um banco de dados mongo. onde é possivel criar, visualizar, deletar e atualizar um veiculo. foram usadas as bibliotecas sinon e chai para construir os testes de unidade.

## Instalação e execução

1 - Clone o repositório:
git clone git@github.com:Jean-Rosa19/Car-Shop.git

2 - Na raíz do projeto, suba os containers car_shop e car_shop_db utilizando o docker-compose
docker-compose up -d

3 - Abra o terminal do container car_shop
docker exec -it car_db bach

4 - No terminal do container, instale as dependências com o comando:
npm install

6 - Agora execute a aplicação com o comando:
npm start


## Tecnologias:

- Typescript
- Node.js
- Express.js
- Mongo-db
- Chai
- Sinon


