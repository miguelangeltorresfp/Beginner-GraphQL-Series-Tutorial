# BEGINNER GRAPHQL SERIES TUTORIAL BY BEN AWAD

[youtube-link](https://www.youtube.com/watch?v=DyvsMKsEsyE&list=PLN3n1USn4xln0j_NN9k4j5hS1thsGibKi)

## PART 0 - HELLO WORLD

* `yarn init -y`

* Install Apollo Server & GraphQL - `yarn add apollo-server graphql`

* Create scr/index.js file

## PART 1 - BASIC TYPES

* `yarn add -D node-dev`

* Link to the GraphQL Cheat Sheet - [LINK](https://github.com/sogko/graphql-schema-language-cheat-sheet)

* To pass parameters or arguments to queries you have do it with input

```bash
  input UserInfo {
    username: String!
    password: String!
    age: Int
  }
```

* Mutations run in order whereas queries run in parallel