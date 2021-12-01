import Problem from '../_lib/problem.js'

class Day01 extends Problem {
  constructor(inputFileName) {
    super(inputFileName)
  }

  solvePart1() {
    const first = parseInt(this.lines[0])
    return this.lines.reduce(
      (results, line) => {
        const current = parseInt(line)
        let { previous, count } = results
        if (current > previous) {
          count++
        }
        return { previous: current, count }
      },
      { previous: first, count: 0 },
    ).count
  }

  solvePart2() {
    return parseInt(this.solvePart1())
  }
}

export default Day01
