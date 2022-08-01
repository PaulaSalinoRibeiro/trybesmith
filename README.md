# TrybeSmith

## Como utilizar 
  - clonar o repositório
  - rodar o comando `npm install`
  - criar um arquivo `.env`na raiz do projeto e passar as variaveis de ambiente para acessar o banco de dados e um secreto para o jwt
  - rodar o comando `npm run dev`

## Bibliotecas utilizadas
  - typescript
  - dotenv
  - express
  - joi
  - jsonwebtoken
  - mysql2

## Rotas 

### Rota post/login 
Essa rota permite fazer o login atraves da url `http://localhost:3000/login`
E espera que seja passado no body da requisição o json 

```
  {
    "username": "reigal",
    "password": "1dragaonoceu"
  }
```

E como resposta dessa requisição é gerado um token e o status code 200
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJlaWdhbCIsImNsYXNzZSI6Ikd1ZXJyZWlybyIsImxldmVsIjoxMCwicGFzc3dvcmQiOiIxZHJhZ2Fvbm9jZXUifSwiaWF0IjoxNjU5MzgxMzkzLCJleHAiOjE2NjE5NzMzOTN9.j_9bQjh8_djEEU_5ULfb8P0Up9k1VDm0n_dcQlDJBH0"
}
```

### Rota post/users
Essa rota server para criar um novo usuario atraves da url `http://localhost:3000/users`
E espera que seja passado no body da requisição o json 

```
{ 
  "username": "MAX2",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

E como resposta dessa requisição é gerado um token e o status code 201
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJlaWdhbCIsImNsYXNzZSI6Ikd1ZXJyZWlybyIsImxldmVsIjoxMCwicGFzc3dvcmQiOiIxZHJhZ2Fvbm9jZXUifSwiaWF0IjoxNjU5MzgxMzkzLCJleHAiOjE2NjE5NzMzOTN9.j_9bQjh8_djEEU_5ULfb8P0Up9k1VDm0n_dcQlDJBH0"
}
```

### Rota get/products
Essa rota lista todos os produtos atraves da url `http://localhost:3000/products`

O retorno esperado é um json e o status code 200

```
[
    {
        "id": 1,
        "name": "Espada curta",
        "amount": "10 peças de ouro",
        "orderId": null
    },
    {
        "id": 2,
        "name": "Escudo desnecessariamente grande",
        "amount": "20 peças de ouro",
        "orderId": 1
    },
    {
        "id": 3,
        "name": "Adaga de Aço Valírico",
        "amount": "1 peça de ouro",
        "orderId": 2
    }
]
```

### Rota post/products
Essa rota permite adicionar um novo produto atraves da url `http://localhost:3000/products`
E espera que seja passado no body da requisição o json 

```
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

O retorno esperado é um json e o status code 201

```
  {
      "id": 6,
      "name": "Espada longa",
      "amount": "30 peças de ouro"
  }
```

### Rota get/orders
Essa rota permite listar todas as orders atraves da url `http://localhost:3000/orders`

O retorno esperado é um json e o status code 200
```
[
    {
        "id": 1,
        "userId": 1,
        "productsIds": [
            2
        ]
    },
    {
        "id": 3,
        "userId": 2,
        "productsIds": [
            5
        ]
    },
    {
        "id": 2,
        "userId": 3,
        "productsIds": [
            3,
            4
        ]
    }
]
```

### Rota post/orders
Essa rota permite criar uma nova order atraves da url `http://localhost:3000/orders`
Espera que seja passado no um token de autenticação no header da requisição e um json no body 

```
  Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJlaWdhbCIsImNsYXNzZSI6Ikd1ZXJyZWlybyIsImxldmVsIjoxMCwicGFzc3dvcmQiOiIxZHJhZ2Fvbm9jZXUifSwiaWF0IjoxNjU5MzY4Mjk3LCJleHAiOjE2NjE5NjAyOTd9.WNsHstVoOQC36WDXa1Goj-luQpuEc_mLU107q5-LovI

```
  {
    "productsIds": [1, 2]
  }
```

E como resposta é recebido um json e o status code 201

```
{
    "userId": 1,
    "productsIds": [
        1, 2
    ]
}
```
