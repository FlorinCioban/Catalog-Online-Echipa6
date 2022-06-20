import type { EditGradeById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GradeForm from 'src/components/Grade/GradeForm'

export const QUERY = gql`
  query EditGradeById($id: Int!) {
    grade: grade(id: $id) {
      id
      grade
      semester
      year
      examinationDate
      studentId
      courseId
    }
  }
`
const UPDATE_GRADE_MUTATION = gql`
  mutation UpdateGradeMutation($id: Int!, $input: UpdateGradeInput!) {
    updateGrade(id: $id, input: $input) {
      id
      grade
      semester
      year
      examinationDate
      studentId
      courseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ grade }: CellSuccessProps<EditGradeById>) => {
  const [updateGrade, { loading, error }] = useMutation(UPDATE_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('Grade updated')
      navigate(routes.grades())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { studentId: parseInt(input.studentId), courseId: parseInt(input.courseId), })
    updateGrade({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Grade {grade.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GradeForm grade={grade} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
