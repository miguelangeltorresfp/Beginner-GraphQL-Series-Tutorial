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

## PART 2 - HOW GRAPHQL RESOLVERS WORK

## They can receive four arguments: (parent, args, context, info)

### args

```bash
const resolvers = {
  Query: {
    hello: (parent, { name }) => `hello world ${name}`,
    user: () => ({ id: 1, username: "bob" })
  },
  Mutation: {
    login: (parent, { userInfo: { username } }, context, info) => {
      return username;
    },
    register: () => ({
      errors: [{ field: "username", message: "bad" }],
      user: { id: 1, username: "bob" }
    })
  }
};
```

### context

* You have access to it across all of your resolvers and it's created in the declaration of Apollo Server. It can be used to send cookies.

```bash
const resolvers = {
  Query: {
    hello: (parent, { name }) => `hello world ${name}`,
    user: () => ({ id: 1, username: "bob" })
  },
  Mutation: {
    login: (parent, { userInfo: { username } }, context, info) => {
      console.log(context);
      context.res.cookies("");
      return username;
    },
    register: () => ({
      errors: [{ field: "username", message: "bad" }],
      user: { id: 1, username: "bob" }
    })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res })
});

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
```

* Resolver can be asynchronouse and graphql can resolve the promise

### info

* It's not useful at first.

### parent

* you can also resolve individual field, for example:

```bash
const resolvers = {
  User: {
    username: () => "I am username"
  },
}
```

* or use parent parameter to process some data for all the resolvers:

```bash
const resolvers = {
  User: {
    firstLetterOfUserName: parent => {
      return parent.username ? parent.username[0] : null;
    }
  }
}
```
