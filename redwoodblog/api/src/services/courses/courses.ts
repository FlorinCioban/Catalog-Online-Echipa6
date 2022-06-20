import type { QueryResolvers, CourseResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const courses: QueryResolvers['courses'] = () => {
  return db.course.findMany()
}

export const course: QueryResolvers['course'] = ({ id }) => {
  return db.course.findUnique({
    where: { id },
  })
}

export const Course: CourseResolvers = {
  Grade: (_obj, { root }) =>
    db.course.findUnique({ where: { id: root.id } }).Grade(),
}
