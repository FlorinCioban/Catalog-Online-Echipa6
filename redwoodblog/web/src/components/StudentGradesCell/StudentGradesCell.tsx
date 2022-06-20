import type { StudentGradesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import StudentGradesList from '../StudentGradesList/StudentGradesList'

export const QUERY = gql`
  query StudentGradesQuery($studentId: Int!) {
    studentGrades: studentGrades(studentId: $studentId) {
      id
      year
      semester
      course {
        name
      }
      grade
      examinationDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  studentGrades,
}: CellSuccessProps<StudentGradesQuery>) => {
  return <StudentGradesList grades={studentGrades} />
}
