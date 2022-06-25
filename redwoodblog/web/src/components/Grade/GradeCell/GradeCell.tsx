import type { FindGradeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Grade from 'src/components/Grade/Grade'

export const QUERY = gql`
  query FindGradeById($id: Int!) {
    grade: grade(id: $id) {
      id
      grade
      semester
      year
      examinationDate
      student {
        id
        firstName
        lastName
      }
      course {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Grade not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ grade }: CellSuccessProps<FindGradeById>) => {
  return <Grade grade={grade} />
}
