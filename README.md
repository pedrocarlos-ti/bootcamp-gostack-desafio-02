# Desafio 02. Iniciando aplicação

Crie uma aplicação do zero utilizando Express.

Nessa aplicação configure as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgresSQL ou MySQL);

**Configurações:**

- **Sucrase** - yarn add sucrase -D / Para rodar o comando terá que informar dentro de script sucrase-node src/server.js
- **Nodemon** - yarn add nodemon -D / Para executar junto do sucrase precisar criar o arquivo nodemon.json e adicionar as seguintes informações:

```
{
  "execMap": {
    "js": "sucrase-node"
  }
}
```

- **ESLint** - yarn add eslint -D
  yarn eslint --init
  To check syntax, find problems, and enforce code style,
  JavaScript modules (import/export),
  None of these,
  Node,
  Use a popular style guide,
  Airbnb,
  JavaScript
  Yes.

  Yarn.

- **Prettier** - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
- **EditorConfig** - Adicionar a extensão do VSCode, botão direito no diretório raíz e generate .editorconfig. As ultimas duas linhas true.

Durante esse desafio você dará início a um novo projeto no Bootcamp, esse projeto será desenvolvido aos poucos até o fim da sua jornada onde você terá uma aplicação completa envolvendo back-end, front-end e mobile.

Esse projeto também será utilizado para a certificação do bootcamp, então bora pro código!

## Aplicação

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app agregador de eventos para desenvolvedores chamado Meetapp (um acrônimo à Meetup + App).

Nesse primeiro desafio vamos criar algumas funcionalidades básicas que aprendemos ao longo das aulas até aqui.

## Funcionalidades

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

### Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e senha.

- A autenticação deve ser feita utilizando JWT.
- Realize a validação dos dados de entrada;

### Cadastro e atualização de usuários.

Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.

Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.

- Criptografe a senha do usuário para segurança.
- Realize a validação dos dados de entrada;

### Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do código do desafio aqui: https://github.com/Rocketseat/bootcamp-gostack-desafio-02

Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

“Não espere para plantar, apenas tenha paciência para colher”!
