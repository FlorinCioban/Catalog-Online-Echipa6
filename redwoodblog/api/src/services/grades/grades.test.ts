import { grades, grade, createGrade, updateGrade, deleteGrade } from './grades'
import type { StandardScenario } from './grades.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('grades', () => {
  scenario('returns all grades', async (scenario: StandardScenario) => {
    const result = await grades()

    expect(result.length).toEqual(Object.keys(scenario.grade).length)
  })

  scenario('returns a single grade', async (scenario: StandardScenario) => {
    const result = await grade({ id: scenario.grade.one.id })

    expect(result).toEqual(scenario.grade.one)
  })

  scenario('creates a grade', async (scenario: StandardScenario) => {
    const result = await createGrade({
      input: {
        grade: 5063612,
        semester: 3730234,
        year: 'String',
        examinationDate: '2022-06-19T17:55:31Z',
        studentId: scenario.grade.two.studentId,
        courseId: scenario.grade.two.courseId,
      },
    })

    expect(result.grade).toEqual(5063612)
    expect(result.semester).toEqual(3730234)
    expect(result.year).toEqual('String')
    expect(result.examinationDate).toEqual('2022-06-19T17:55:31Z')
    expect(result.studentId).toEqual(scenario.grade.two.studentId)
    expect(result.courseId).toEqual(scenario.grade.two.courseId)
  })

  scenario('updates a grade', async (scenario: StandardScenario) => {
    const original = await grade({ id: scenario.grade.one.id })
    const result = await updateGrade({
      id: original.id,
      input: { grade: 5083491 },
    })

    expect(result.grade).toEqual(5083491)
  })

  scenario('deletes a grade', async (scenario: StandardScenario) => {
    const original = await deleteGrade({ id: scenario.grade.one.id })
    const result = await grade({ id: original.id })

    expect(result).toEqual(null)
  })
})
