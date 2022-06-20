import { render } from '@redwoodjs/testing/web'

import StudentGradesList from './StudentGradesList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentGradesList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentGradesList />)
    }).not.toThrow()
  })
})
