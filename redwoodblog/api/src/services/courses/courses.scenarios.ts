import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: { data: { name: 'String974873' } },
    two: { data: { name: 'String2813933' } },
  },
})

export type StandardScenario = typeof standard
