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

    this.#calls.find((number) => {
      this.#boards.forEach((board) => board.mark(number))
      winningBoard = this.#boards.find((board) => board.isWinner)
      return winningBoard
    })

    return winningBoard.getScore()
  }

  solvePart2() {
    // Reset the state of the boards; I lost too much sanity not doing this
    // Not great but it'll do
    this.#boards = this.#getBoards()
    // go until there are no more boards left
    // if there are no more calls left then return the last board
    const winningBoards = []

    for (let i = 0; i < this.#calls.length; i++) {
      const number = this.#calls[i]
      const stillPlaying = this.#boards.filter((board) => !board.isWinner)
      stillPlaying.forEach((board) => board.mark(number))

      const nextWinningBoard = stillPlaying.find((board) => board.isWinner)
      if (nextWinningBoard) {
        winningBoards.push(nextWinningBoard)
      }

      if (winningBoards.length === this.#boards.length) break
    }

    const lastWinningBoard = winningBoards[winningBoards.length - 1]

    return lastWinningBoard.getScore()
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
