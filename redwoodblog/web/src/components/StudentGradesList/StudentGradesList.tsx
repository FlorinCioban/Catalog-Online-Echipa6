const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleString()}
      </time>
    )
  )
}

type Props = {
  grades: any
}

const StudentGradesList = ({ grades }: Props) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Year</th>
            <th>Semester</th>
            <th>Grade</th>
            <th>Course</th>
            <th>Examination date</th>
            <th>Student ID</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id}>
              {/* <td>{truncate(grade.id)}</td> */}
              <td>{truncate(grade.year)}</td>
              <td>{truncate(grade.semester)}</td>
              <td>{truncate(grade.grade)}</td>
              <td>{truncate(grade.course.name)}</td>
              <td>{timeTag(grade.examinationDate)}</td>
              <td>{grade.studentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentGradesList
