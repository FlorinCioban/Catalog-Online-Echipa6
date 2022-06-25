export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    Student: [Student]!
    roles: String!
  }

  type Query {
    users: [User!]! @requireAuth(roles: ["superadmin", "admin"])
    user(id: Int!): User @requireAuth(roles: ["superadmin", "admin"])
  }

  input CreateUserInput {
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth (roles: ["superadmin", "admin"])
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth (roles: ["superadmin", "admin"])
    deleteUser(id: Int!): User! @requireAuth (roles: ["superadmin", "admin"])
  }
`
