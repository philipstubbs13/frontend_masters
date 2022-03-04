// avoid monkey-patching with jest.mock
import thumbWar from '../thumb-war'
import * as utils from '../utils'

// add an inline mock with the jest.mock API

jest.mock(
  '../utils',
  () => {
    return {
      getWinner: jest.fn((p1, p2) => p2)
    }
  }
)

// (Hint #1)

beforeEach(() => {
  utils.getWinner.mockClear()
})

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})
test('returns winner again', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})


/*
Hint below:














































jest.mock('../utils', () => {
  return {
    // ...
    // see answer in the solution file
  }
})

 */
