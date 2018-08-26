import 'make-promises-safe'
import { square } from '~/lib'

describe('square()', () => {
  it('squares a number', () => {
    const result = square(2)
    expect(result).toEqual(4)
  })
})
