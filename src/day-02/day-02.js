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

  #actionAmount = this.lines
    .map((line) => line.split(' '))
    .map(([action, amount]) => [action, parseInt(amount)])

  solvePart1() {
    const position = { horizontal: 0, depth: 0 }
    this.#actionAmount.forEach(([action, amount]) =>
      this.#actions[action](position, amount),
    )
    return position.horizontal * position.depth
  }

  #actions2 = {
    forward: (position, amount) => {
      position.horizontal += amount
      position.depth += position.aim * amount
    },
    down: (position, amount) => (position.aim += amount),
    up: (position, amount) => (position.aim -= amount),
  }

  solvePart2() {
    const position = { horizontal: 0, depth: 0, aim: 0 }
    this.#actionAmount.forEach(([action, amount]) =>
      this.#actions2[action](position, amount),
    )
    return position.horizontal * position.depth
  }
}

export default Day02
