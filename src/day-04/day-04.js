import Problem from '../_lib/problem.js'
import Board from './board'

class Day04 extends Problem {
  #calls = this.#getCalls()
  #boards

  constructor(inputFileName) {
    super(inputFileName)
    this.#boards = this.#getBoards()
  }

  solvePart1() {
    let winningBoard
    const winningNumber = this.#calls.find((number) => {
      this.#boards.forEach((board) => board.mark(number))
      winningBoard = this.#boards.find((board) => board.isWinner)
      return winningBoard
    })

    return winningBoard.getScore()
  }

  solvePart2() {
    return parseInt(this.solvePart1())
  }

  #getCalls() {
    const firstLine = this.lines[0]
    const numbers = firstLine.split(',')
    return numbers.map((number) => parseInt(number))
  }

  #getBoards() {
    const boards = []
    let rowBuilder = []

    for (let i = 2; i < this.lines.length; i++) {
      const currentRow = this.lines[i]

      if (currentRow !== '') rowBuilder.push(currentRow)
      else {
        boards.push(new Board(rowBuilder))
        rowBuilder = []
      }
    }
    boards.push(new Board(rowBuilder))

    return boards
  }
}

export default Day04
