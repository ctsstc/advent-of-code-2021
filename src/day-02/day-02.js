import Problem from '../_lib/problem.js'

class Day02 extends Problem {
  constructor(inputFileName) {
    super(inputFileName)
  }

  #actions = {
    forward: (position, amount) => (position.horizontal += amount),
    down: (position, amount) => (position.depth += amount),
    up: (position, amount) => (position.depth -= amount),
  }

  solvePart1() {
    const position = this.lines
      .map((line) => line.split(' '))
      .reduce(
        (position, [action, amount]) => {
          amount = parseInt(amount)
          this.#actions[action](position, amount)
          return position
        },
        { horizontal: 0, depth: 0 },
      )

    return position.horizontal * position.depth
  }

  solvePart2() {
    return parseInt(this.solvePart1())
  }
}

export default Day02
