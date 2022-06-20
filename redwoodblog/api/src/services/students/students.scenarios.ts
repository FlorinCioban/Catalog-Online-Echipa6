import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StudentCreateArgs>({
  student: {
    one: { data: { firstName: 'String4564457', lastName: 'String9581368' } },
    two: { data: { firstName: 'String7471873', lastName: 'String736709' } },
  },
})

export type StandardScenario = typeof standard
