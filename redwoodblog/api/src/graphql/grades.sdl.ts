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
    grades: [Grade!]! @requireAuth(roles: ["superadmin","teacher"])
    grade(id: Int!): Grade @requireAuth(roles: ["superadmin","teacher"])
    studentGrades: [Grade!]! @requireAuth(roles: ["superadmin","student"])
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
    createGrade(input: CreateGradeInput!): Grade! @requireAuth(roles: ["superadmin","teacher"])
    updateGrade(id: Int!, input: UpdateGradeInput!): Grade!
      @requireAuth(roles: ["superadmin","teacher"])
    deleteGrade(id: Int!): Grade! @requireAuth(roles: ["superadmin","teacher"])
  }
`
