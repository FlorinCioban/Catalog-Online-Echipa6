import { render } from '@redwoodjs/testing/web'

import StudentHomePage from './StudentHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StudentHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentHomePage />)
    }).not.toThrow()
  })
})
