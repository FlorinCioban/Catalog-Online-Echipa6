import type { QueryResolvers, StudentResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const students: QueryResolvers['students'] = () => {
  return db.student.findMany()
}

export const student: QueryResolvers['student'] = ({ id }) => {
  return db.student.findUnique({
    where: { id },
  })
}

export const Student: StudentResolvers = {
  Grade: (_obj, { root }) =>
    db.student.findUnique({ where: { id: root.id } }).Grade(),
}
