import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GradeCreateArgs>({
  grade: {
    one: {
      data: {
        grade: 4537490,
        semester: 9142584,
        year: 'String',
        examinationDate: '2022-06-19T17:55:31Z',
        student: {
          create: { firstName: 'String5281870', lastName: 'String9209423' },
        },
        course: { create: { name: 'String3379952' } },
      },
    },
    two: {
      data: {
        grade: 1359846,
        semester: 4774332,
        year: 'String',
        examinationDate: '2022-06-19T17:55:31Z',
        student: {
          create: { firstName: 'String5626494', lastName: 'String2665879' },
        },
        course: { create: { name: 'String2952747' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
