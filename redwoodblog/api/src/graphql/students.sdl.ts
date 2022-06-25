export const schema = gql`
  type Student {
    id: Int!
    firstName: String!
    lastName: String!
    Grade: [Grade]!
  }

  type Query {
    students: [Student!]! @requireAuth(roles: ["superadmin", "admin", "teacher"])
  }

  input CreateStudentInput {
    firstName: String!
    lastName: String!
  }

  input UpdateStudentInput {
    firstName: String
    lastName: String
  }
`
