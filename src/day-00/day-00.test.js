import Problem from '../day-00/day-00.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('Day 00', () => {
  describe('example.txt', () => {
    const problem = new Problem(__dirname + '/example.txt')

    it('solves part 1', () => {
      expect(problem.solvePart1()).toBe('123')
    })

    // it('solves part 2', () => {
    //   expect(problem.solvePart2()).toBe(123)
    // })
  })

  describe('input.txt', () => {
    const problem = new Problem(__dirname + '/input.txt')

    // it('solves part 1', () => {
    //   expect(problem.solvePart1()).toBe('456789')
    // })

    // it('solves part 2', () => {
    //   expect(problem.solvePart2()).toBe(456789)
    // })
  })
})
