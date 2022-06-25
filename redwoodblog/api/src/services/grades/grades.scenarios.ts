import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GradeCreateArgs>({
  grade: {
    one: {
      data: {
        grade: 5037161,
        semester: 2180874,
        year: 'String',
        examinationDate: '2022-06-19T17:53:48Z',
        student: { create: { firstName: 'String', lastName: 'String' } },
        course: { create: { name: 'String3771822' } },
      },
    },
    two: {
      data: {
        grade: 4630206,
        semester: 3096585,
        year: 'String',
        examinationDate: '2022-06-19T17:53:48Z',
        student: { create: { firstName: 'String', lastName: 'String' } },
        course: { create: { name: 'String1055477' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
