export const schema = gql`
  type Grade {
    id: Int!
    grade: Int!
    semester: Int!
    year: String!
    examinationDate: DateTime!
    student: Student!
    studentId: Int!
    course: Course!
    courseId: Int!
  }

  type Query {
    grades: [Grade!]! @requireAuth
    grade(id: Int!): Grade @requireAuth
    studentGrades(studentId: Int!): [Grade!]! @skipAuth
  }

  type Query {
    grades: [Grade!]! @requireAuth
    grade(id: Int!): Grade @requireAuth
  }

  input CreateGradeInput {
    grade: Int!
    semester: Int!
    year: String!
    examinationDate: DateTime!
    studentId: Int!
    courseId: Int!
  }

  input UpdateGradeInput {
    grade: Int
    semester: Int
    year: String
    examinationDate: DateTime
    studentId: Int
    courseId: Int
  }

  type Mutation {
    createGrade(input: CreateGradeInput!): Grade! @requireAuth
    updateGrade(id: Int!, input: UpdateGradeInput!): Grade! @requireAuth
    deleteGrade(id: Int!): Grade! @requireAuth
  }
`
