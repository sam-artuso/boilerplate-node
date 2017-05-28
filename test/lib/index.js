import { expect } from 'chai'

import { square } from '~/lib'

describe('square()', () => {
  it('should square a number', () => {
    expect(square(2)).to.equal(4)
  })
})
