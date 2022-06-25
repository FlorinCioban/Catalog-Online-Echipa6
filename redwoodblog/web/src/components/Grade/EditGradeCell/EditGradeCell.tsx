import type { EditGradeById, GetStudents } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, useQuery } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GradeForm, { formatStudentName } from 'src/components/Grade/GradeForm'

export const QUERY = gql`
  query EditGradeById($id: Int!) {
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

export const GET_STUDENTS = gql`
  query GetStudents {
    students {
      id
      firstName
      lastName
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

  const {
    loading: loadingStudents,
    error: fetchStudentsError,
    data: studentsData,
  } = useQuery<GetStudents>(GET_STUDENTS)

  const onSave = (input, id) => {
    const selectedStudent = studentsData.students.find(
      (student) => formatStudentName(student) === input.student
    )
    const castInput = {
      ...input,
      studentId: selectedStudent.id,
      courseId: parseInt(input.courseId),
      student: undefined,
    }
    updateGrade({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Grade {grade.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <GradeForm
          grade={grade}
          students={studentsData?.students || []}
          onSave={onSave}
          error={error || fetchStudentsError}
          loading={loading || loadingStudents}
        />
      </div>
    </div>
  )
}
