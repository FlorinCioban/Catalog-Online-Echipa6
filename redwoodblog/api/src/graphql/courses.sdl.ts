export const schema = gql`
  type Course {
    id: Int!
    name: String!
    Grade: [Grade]!
  }

  type Query {
    courses: [Course!]! @requireAuth
  }

  input CreateCourseInput {
    name: String!
  }

  input UpdateCourseInput {
    name: String
  }
`
