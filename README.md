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

Você precisará baixar o Docker em sua maquina, depois de instalado use o comando ```docker pull matgoulart1996/trab2_tp6-api:tagname ``` onde tagname é a tag das atualizações feitas pelo docker Hub utilize sempre a mais atual

[Clique aqui para visualizar o repositório no Docker Hub](https://hub.docker.com/repository/docker/matgoulart1996/trab2_tp6-api)

Com o docker, você terá acesso à mesma imagem q utilizei em minha aplicação, não tendo problemas com conflito de versões tanto do Node.js, ou do Postgres q estou usando no projeto, com o docker instalado utilize o comando ```docker-compose up``` que sejam baixadas os containers, e seja criado a tabela para manipulação dos dados, e inserts default para população da tabela

## Brincando com a API

Os Endpoints da API são:

### GETS
```
http://localhost:8087/api/v1/match
```
Para get padrão
```
http://localhost:8087/api/v1/match/:id
```
Para get por ID de match
```
http://localhost:8087/api/v1/match/nation/:nation
```
Para get por Seleção
```
http://localhost:8087/api/v1/match/date/:date
```
Para get por Data (utilize a data no formato "YYYY-MM-DD")

### POST
```
http://localhost:8087/api/v1/match
```
### BODY DA REQUISIÇÃO
```
 {
        "id": NUMBER,
        "nation_a": STRING,
        "score_nation_a": NUMBER,
        "nation_b": STRING,
        "score_nation_b": NUMBER,
        "match_date": STRING
    }
```
(Utilize a data no formato "YYYY-MM-DD")

### PUT
```
http://localhost:8087/api/v1/match/:id/:scoreNationA/:scoreNationB
```
Para fazer mudanças no Placar do jogo, utilize o ID da partida, quantos gols a Seleção A fez e quantos gols a Seleção B fez no endpoint

### DELETE
```
http://localhost:8087/api/v1/match/:id
```
Para excluir o registro de jogo utilize o ID do mesmo







