import Problem from '../day-02/day-02.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('Day 02', () => {
  describe('example.txt', () => {
    const problem = new Problem(__dirname + '/example.txt')

    it('solves part 1', () => {
      expect(problem.solvePart1()).toBe(150)
    })

    it('solves part 2', () => {
      expect(problem.solvePart2()).toBe(900)
    })
  })

  describe('input.txt', () => {
    const problem = new Problem(__dirname + '/input.txt')

    it('solves part 1', () => {
      expect(problem.solvePart1()).toBe(1868935)
    })

    it('solves part 2', () => {
      expect(problem.solvePart2()).toBe(1965970888)
    })
  })
})
