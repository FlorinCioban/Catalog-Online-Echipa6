import { GetStudents } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GradeForm, { formatStudentName } from 'src/components/Grade/GradeForm'

const CREATE_GRADE_MUTATION = gql`
  mutation CreateGradeMutation($input: CreateGradeInput!) {
    createGrade(input: $input) {
      id
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

const NewGrade = () => {
  const [createGrade, { loading, error }] = useMutation(CREATE_GRADE_MUTATION, {
    onCompleted: () => {
      toast.success('Grade created')
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

  const onSave = (input) => {
    const selectedStudent = studentsData.students.find(
      (student) => formatStudentName(student) === input.student
    )

    const castInput = {
      ...input,
      studentId: selectedStudent.id,
      courseId: parseInt(input.courseId),
      student: undefined,
    }
    createGrade({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Grade</h2>
      </header>
      <div className="rw-segment-main">
        <GradeForm
          students={studentsData?.students || []}
          onSave={onSave}
          loading={loading || loadingStudents}
          error={error || fetchStudentsError}
        />
      </div>
    </div>
  )
}

export default NewGrade
