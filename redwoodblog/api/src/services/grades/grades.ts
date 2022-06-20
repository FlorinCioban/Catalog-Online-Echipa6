import type {
  QueryResolvers,
  MutationResolvers,
  GradeResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const grades: QueryResolvers['grades'] = () => {
  return db.grade.findMany()
}

export const studentGrades: QueryResolvers['studentGrades'] = ({
  studentId,
}) => {
  return db.grade.findMany({
    where: { studentId },
  })
}

export const grade: QueryResolvers['grade'] = ({ id }) => {
  return db.grade.findUnique({
    where: { id },
  })
}

export const createGrade: MutationResolvers['createGrade'] = ({ input }) => {
  return db.grade.create({
    data: input,
  })
}

export const updateGrade: MutationResolvers['updateGrade'] = ({
  id,
  input,
}) => {
  return db.grade.update({
    data: input,
    where: { id },
  })
}

export const deleteGrade: MutationResolvers['deleteGrade'] = ({ id }) => {
  return db.grade.delete({
    where: { id },
  })
}

export const Grade: GradeResolvers = {
  student: (_obj, { root }) =>
    db.grade.findUnique({ where: { id: root.id } }).student(),
  course: (_obj, { root }) =>
    db.grade.findUnique({ where: { id: root.id } }).course(),
}
