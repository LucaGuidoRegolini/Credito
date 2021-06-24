# Compra de credito

Website capaz de armazenar ofertas de créditos e compras feitas no site em seu banco de dados, seu frontend foi feito em **VueJs**, uma biblioteca JavaScript de código aberto, e seu backend foi feito em **NodeJs**, um software de código aberto, multiplataforma, que executa códigos JavaScript, e seu banco de dados é **MySQL**, toda a aplicação tirando o frontend esta em containers **Docker**.

## Fases do desafio concluída

- Site online https://credito-todos.netlify.app
- Api Rest https://back-credito.herokuapp.com/
- Api para simulação de Score https://api-credito.herokuapp.com/

## Modo de usar

Pelo Prompt de comando, no diretório da aplicação executar os seguintes comandos para iniciar o **backend** e a **API**.

> é necessário ter o Docker compose instalado.

```cmd
cd docker
npm install
npm start
```

> A API ira iniciar em **http://localhost:2000/**
> O backend ira iniciar em **http://localhost:3000/**

Pelo Prompt de comando, no diretório da aplicação executar os seguintes comandos para iniciar o **frontend**.

> é necessário ter o NodeJs instalado.

```cmd
cd frontend
npm install
npm run dev
```

> A instância ira iniciar em **http://localhost:8080/**

## Documentação Backend

#### Listando ofertas

Deve-se usar o método **GET**, para listar todos as ofertas de credito no banco de dados.

```http
https://back-credito.herokuapp.com/offers
```

#### Selecionando ofertas

também com o método **GET** podemos selecionar um cliente em especial, basta colocar **Id** como **Route Params**, basta coloca-ló na frente da URL.

> Lembre-se de não colocar outros parâmetros na URL.

```http
https://back-credito.herokuapp.com/offer/1
```

#### Pesquisando por score

deve-se usar o método **GET**, a URL deve ser as mesma, porem com o **SCORE MINIMO** que deseja friltar as ofertas.


```http
https://back-credito.herokuapp.com/offers/952
```

#### Pesquisando por agencia

deve-se usar o método **GET**, a URL deve ser as mesma, porem com o  **NOME DA AGENCIA** que deseja friltar as ofertas.

```http
http://localhost:3000/agency/agencia
```

#### Criando oferta

Agora será necessário usar o método **POST**, a URL deve ser a mesma usada até agora, sem nenhum parâmetro na frente.

> Navegadores como o Google Chrome por padrão usam apenas o método **GET** recomenda-se o uso de outro aplicativo, como **Insomnia** ou **postman**  para as rota que não são **GET**

```http
https://back-credito.herokuapp.com/offer
```

> **padrão para a criação da oferta**

```json
{
  "min_score": "valor minimo do score",
	"max_loan": "valor do emprestimo",
	"interest_rate": "juros por mês",
	"financial_agency": "nome da empresa"
}
```


#### Deletando oferta

**Cuidado, ao deletar um registro o mesmo não poderá ser restaurado**

Será necessário usar o método **DELETE**, a URL deve ser a mesma usada até agora, com o **Id** da oferta  sendo passado como um **Route Params**.

```http
https://back-credito.herokuapp.com/offer/2
```

#### Listando  compra

deve-se usar o método **GET**, a URL deve ser com **sale** em vez de offer.

```http
https://back-credito.herokuapp.com/sale
```

#### Selecionando compra

deve-se usar o método **GET**, a URL deve ser as mesma, agora com o **CPF** que deseja procurar a compra.

```http
https://back-credito.herokuapp.com/sale/111.111.111-11
```

#### Criando oferta

Agora será necessário usar o método **POST**, a URL deve ser a mesma usada até agora, sem nenhum parâmetro na frente.

```http
https://back-credito.herokuapp.com/sale
```

> **padrão para a criação da da venda**

```json
{
  "ID_client": "cpf do cliente",
	"id": "id daoferta",
	"parcels": "jnumero de parcelas",
}
```

## Documentação API

#### Listando cpfs

Deve-se usar o método **GET**, para listar todos os cpfs no banco de dados.

```http
https://api-credito.herokuapp.com/
```

#### Verificando CPF

também com o método **GET** podemos verificar um CPF em especial, basta colocar **CPF** como **Route Params**, basta coloca-ló na frente da URL.

> Lembre-se de não colocar outros parâmetros na URL.

```http
https://api-credito.herokuapp.com/111.111.111-11
```
> O **score** é gerado de maneira aleatoria e depois armazenado no banco de dados junto ao **CPF**, caso seja enviado um **CPF** ainda não enviado a rota automaticamente ja cria seu registro.

## Aviso

> A api está alocada na hospedagem gratuita do Heroku, por isso pode demorar um pouco para responder, ou seja não é por falta de habilidade do programador, mas sim por falta de dinheiro.
