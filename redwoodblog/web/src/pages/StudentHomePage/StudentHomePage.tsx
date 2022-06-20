import { MetaTags } from '@redwoodjs/web'
import StudentGradesCell from 'src/components/StudentGradesCell'

const StudentHomePage = () => {
  return (
    <>
      <MetaTags title="StudentHome" description="StudentHome page" />

      <h1>Grades</h1>
      <StudentGradesCell studentId={2}></StudentGradesCell>
    </>
  )
}

export default StudentHomePage
