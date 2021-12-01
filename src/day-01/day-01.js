import Problem from '../_lib/problem.js'

class Day01 extends Problem {
  constructor(inputFileName) {
    super(inputFileName)
  }

  solvePart1 = () =>
    this.linesAsInts.reduce(
      (results, current) => {
        let { previous, count } = results
        if (current > previous) {
          count++
        }
        return { previous: current, count }
      },
      { previous: this.linesAsInts[0], count: 0 },
    ).count

  solvePart2() {
    let previous =
      this.linesAsInts[0] + this.linesAsInts[1] + this.linesAsInts[2]
    let count = 0

    for (let i = 3; i < this.linesAsInts.length - 2; i++) {
      const current =
        this.linesAsInts[i] + this.linesAsInts[i + 1] + this.linesAsInts[i + 2]
      if (current > previous) {
        count++
      }
      previous = current
    }

    return count
  }
}

export default Day01
