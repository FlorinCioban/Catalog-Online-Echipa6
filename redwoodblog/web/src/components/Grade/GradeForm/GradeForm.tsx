import { EditGradeById, GetStudents } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
  Submit,
  InputField,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

export const formatStudentName = (student?: {
  firstName: string
  lastName: string
}) => {
  return student ? `${student.firstName} ${student.lastName}` : ''
}

type Props = {
  grade?: EditGradeById['grade']
  students: GetStudents['students']
  onSave: (input: any, id: any) => void
  error: any
  loading: boolean
}

const GradeForm = (props: Props) => {
  const onSubmit = (data) => {
    console.log({ data })
    props.onSave(data, props?.grade?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="grade"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Grade
        </Label>

        <NumberField
          name="grade"
          defaultValue={props.grade?.grade}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true, min: 1, max: 10 }}
        />

        <FieldError name="grade" className="rw-field-error" />

        <Label
          name="semester"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Semester
        </Label>

        <NumberField
          name="semester"
          defaultValue={props.grade?.semester}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="semester" className="rw-field-error" />

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>

        <TextField
          name="year"
          defaultValue={props.grade?.year}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="year" className="rw-field-error" />

        <Label
          name="examinationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Examination date
        </Label>

        <DatetimeLocalField
          name="examinationDate"
          defaultValue={formatDatetime(props.grade?.examinationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="examinationDate" className="rw-field-error" />

        <Label
          name="student"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Student
        </Label>

        <InputField
          list="students"
          id="myBrowser"
          name="student"
          defaultValue={formatStudentName(props.grade?.student)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <datalist id="students">
          {props.students.map((student) => {
            return (
              <option key={student.id} value={formatStudentName(student)} />
            )
          })}
        </datalist>

        {/* <NumberField
          name="studentId"
          defaultValue={props.grade?.studentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        /> */}

        <FieldError name="student" className="rw-field-error" />

        <Label
          name="courseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Course id
        </Label>

        <NumberField
          name="courseId"
          defaultValue={props.grade?.courseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="courseId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default GradeForm
