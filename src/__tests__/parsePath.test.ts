import lib from '../'

describe('ParsePath', () => {
  it('test parse', () => {
    expect(lib.parsePath('/path/file')).toMatchSnapshot()
  })
})
