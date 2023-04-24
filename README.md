
![Lirics Logo](docs/lirics_logo.png?raw=true "Lirics Logo")
![Lirics Logo](docs/lirics_text.PNG?raw=true "Lirics Logo")

## Descrição

Desafio da extensão de NodeJs para desenvolvimento de uma API Rest para ser consumida pelo frontend em Angular desenvolvida pelo Othávio de Lima Souza.

Trata-se de um site de letras de músicas de Rock denominado Lirics.


## Instalação

O projeto foi desenvolvido utilizando:

- IDE: Visual Studio Code v1.71.2
- Ambiente de execução: NodeJS v16.17.0
- Linguagem de programação: Typescript v4.7.4
- Framework Node: Nest v9.1.1
- ORM: Prisma v4.2.1
- Gerenciador de pacotes: npm v8.15.0

Após clonar o projeto e abrir no VSCode, rodar o seguinte comando no terminal:

```bash
$ npm install
```
<p align="center">Antes de fazer a migração do banco de dados verificar no arquivo .env o usuário e senha do banco de dados MySQL.</p>
<p align="center">Usuário e senha padrão: root:root</p>


Após passos acima, é necessário migrar o Schema para gerar as tabelas e popular o banco de dados com todos os objetos e seus atributos previamente criados, para isso deve-se rodar o seguinte comando no terminal:

```bash
$ npx prisma migrate dev
```


## Executando o aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```


## Swagger e utilização

<p align="center">A documentação do projeto pode ser acessada pelo <a href="http://localhost:3000/api#" target="_blank">Swagger</a> http://localhost:3000/api#.</p>

Para iniciar deve-se criar um novo usuário no endpoint User, que é o único endpoint liberado para usuário não logado, além do endpoint de autenticação.

Após a criação do usuário deve-se acessar o endpoint Auth, colocar o email e senha criados anteriormente, enviar a requisição, copiar o token liberado na resposta e colar no 'Authorize' no início da pagina, para ter acesso à aplicação.

Existe também usuários já criados, um deles é:


usuário: user@gft.com

senha: 123456


**Foram criados no total 7 CRUDS, sendo eles:**

1. *Artists - CRUD de artistas/bandas com paginação. Com as relações entre tabelas:*
    - ManyToMany com Genre através da tabela intermediária de artist_has_genre;
    - OneToMany com MusicLetter.

2. *Genres - CRUD de gêneros das bandas e das letras de músicas. Com as relações entre tabelas:*
    - ManyToMany com Artists através da tabela intermediária de artist_has_genre;
    - OneToMany com MusicLetter.

3. *Users - CRUD de usuários, com senha criptografada e token JWT. Com as relações entre tabelas:*
    - ManyToMany com MusicLetter através da tabela intermediária de Favorites
    - OneToMany com Coments e OneToMany com a tabela MusicLetter.

4. *MusicLetter - CRUD de letras de músicas com paginação. Com as relações entre tabelas:*
    - ManyToMany com Users através da tabela auxiliar Favorites;
    - ManyToOne com Users;
    - ManyToOne com Genre;
    - ManyToOne com Artist;
    - OneToMany com Coments;

5. *Coments - CRUD de comentários das músicas. Com as relações entre tabelas:*
    - ManyToOne com MusicLetter;
    - ManyToOne com Users;

6. *Favorites - Create, Read e Delete de letras favoritas do usuário.*
    - Tabela intermediária com relações ManyToOne com Users e MusicLetter.

7. *Artist_has_genre - Create e Delete de gêneros musicais do artista/banda.*
    - Tabela intermediária com relações ManyToOne com Artist e Genre.

- *Auth - endpoint para login do usuário.*

<p align="center">As relações podem ser melhor visualizadas no diagrama EER com MySQL Workbench Model abaixo:</p>

![Diagrama EER MySQL Workbench Model](docs/diagram_database.PNG?raw=true "Diagrama EER MySQL Workbench Model")

Além das funcionalidades descritas acima, também foram desenvolvidos:
 - Tratamento de exceções com Interceptors;
 - Validação dos atributos;
 - Utilização dos verbos HTTP (Post, Get, Patch, Delete);
 - Os status code pertinentes à aplicação;
 - Autenticação e autorização de usuários;
 - Paginação;
 - O Id do usuário autenticado é passado para as requisições dos  através do decorator @CurrentUser, para os seguintes endpoints:

    **Users:**

    | Método  | URL                                                     |
    | ------  | ---                                                     |
    | GET     | http://localhost:3000/v1/users                          |
    | GET     | http://localhost:3000/v1/users/userAuthenticated        |
    | PATCH   | http://localhost:3000/v1/users                          |
    | DELETE  | http://localhost:3000/v1/users                          |

    **Music-letter:**

    | Método  | URL                                                     |
    | ------  | ---                                                     |
    | POST    | http://localhost:3000/v1/music-letter                   |

    **Favorites:**

    | Método  | URL                                                     |
    | ------  | ---                                                     |
    |  POST   | http://localhost:3000/v1/favorites;                     |
    |  GET    | http://localhost:3000/v1/favorites;                     |
    |  GET    | http://localhost:3000/v1/favorites/{music_letter_id};   |
    |  DELETE | http://localhost:3000/v1/favorites/{music_letter_id};   |

    **Coments**

    | Método  | URL                                                     |
    | ------  | ---                                                     |
    |  POST   | http://localhost:3000/v1/coments;                       |


## Suporte

Qualquer dúvida ou problema favor entrar em contato pelo e-mail bruno.riguetto@gft.com ou pelo Teams @BrunoRiguetto.


## Agradecimentos

Quero agradecer ao instrutor Michel pelas duas semanas de estudos de Node, gostei muito dessa stack, me fez entender e visualizar melhor muitas coisas que não ficaram tão claras com o Java, como exemplo as relações entre tabelas do banco de dados.

Agradeço também ao instrutor Clécio por estar conosco nas três semanas de desafio, por todo suporte dado e por nos conduzir muito bem para o desenvolvimento total da aplicação solicitada.

E também agradeço ao Ubiratan, mesmo não estando nesse desafio, quero deixar registrado aqui que sou muito grato por tudo que foi nos ensinado nos desafios anteriores e a forma que foi conduzido o programa com nossa turma, nos permitindo trabalhar mais em equipe.
