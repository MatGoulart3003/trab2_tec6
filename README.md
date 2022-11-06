# API DA COPA DO MUNDO 2022

## Instruções da aplicação:

## Baixando e acessando o projeto localmente:

Para clonar o repositório utilize os comandos:
```
git clone https://github.com/MatGoulart3003/trab2_tec6.git
```
Para ter acesso a nova pasta criada, acesse usando o comando:
```
cd trab2_tec6
```
Agora, você está na raiz do projeto!

## Instalando Node Modules e rodando a aplicação:

Estando na raiz do projeto, acesse a pasta trab2_tp6 e instale o node modules com os comandos:
```
cd trab2_tp6
npm install
```
E para rodar a aplicação, de um ```npm start ```

Porem a aplicação não rodará com o banco de dados e quebrará se voce quiser acessar o banco, por isso é o DOCKER é necessário

## Baixando imagem Docker Hub e imagem DOCKER do projeto:

Você precisará baixar o Docker em sua maquina, depois de instalado use o comando ```docker push matgoulart1996/trab2_tp6-api:tagname ``` onde tagname é a tag das atualizações feitas pelo docker Hub utilize sempre a mais atual

Com o docker, você terá acesso à mesma imagem q utilizei em minha aplicação, não tendo problemas com conflito de versões tanto do Node.js, ou do Postgres q estou usando no projeto, com o docker instalado utilize o comando ```docker-compose up``` que sejam baixadas os containers, e seja criado a tabela para manipulação dos dados, e inserts default para população da tabela

## Brincando com a API

Os Endpoints da API são:

``` http://localhost:8087/api/v1/match
```






