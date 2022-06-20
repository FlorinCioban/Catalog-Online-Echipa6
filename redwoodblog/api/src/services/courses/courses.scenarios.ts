import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: { data: { name: 'String2751010' } },
    two: { data: { name: 'String2684409' } },
  },
})

export type StandardScenario = typeof standard
