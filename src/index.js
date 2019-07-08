const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello(name: String): String!
    user: User
  }

  type User {
    id: ID!
    username: String
    firstLetterOfUserName: String
  }

  type Error {
    field: String!
    message: String!
  }

  type RegisterResponse {
    errors: [Error]
    user: User
  }

  input UserInfo {
    username: String!
    password: String!
    age: Int
  }

  type Mutation {
    login(userInfo: UserInfo!): String!
    register(userInfo: UserInfo!): RegisterResponse!
  }
`;

const resolvers = {
  User: {
    // username: () => "I am username",
    firstLetterOfUserName: parent => {
      return parent.username ? parent.username[0] : null;
      // console.log(parent);
      // parent.username;
    }
    // username: parent => {
    //   console.log(parent);
    //   parent.username;
    // }
  },
  Query: {
    hello: (parent, { name }) => `hello world ${name}`,
    user: () => ({ id: 1, username: "bob" })
  },
  Mutation: {
    login: async (parent, { userInfo: { username } }, context, info) => {
      console.log(context);
      return username;
    },
    register: () => ({
      errors: [{ field: "username", message: "bad" }],
      user: { id: 1 }
    })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res })
});

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
