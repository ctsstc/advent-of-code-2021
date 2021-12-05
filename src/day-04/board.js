export default class Board {
  #winner = false
  #numbers
  #rows = new Map()
  #cols = new Map()
  #width
  #height
  #lastMarked

  /**
   *  Creates an instance of Board.
   * @param {string[]} rows
   * @memberof Board
   */
  constructor(rows) {
    this.#numbers = this.#getNumbers(rows)
    this.#width = rows[0].split(' ').filter(this.#removeEmpty).length
    this.#height = rows.length
  }

  mark(number) {
    const numberSlot = this.#numbers.get(number)
    if (!numberSlot) return

    numberSlot.markPicked()
    this.#markRow(numberSlot.row)
    this.#markCol(numberSlot.col)
    this.#lastMarked = number

    if (this.#isWinner()) this.#winner = true
  }

  get isWinner() {
    return this.#winner
  }

  getScore() {
    const notPicked = [...this.#numbers.keys()].filter((number) => {
      const numberSlot = this.#numbers.get(number)
      return !numberSlot.picked
    })
    const sumNotPicked = notPicked.reduce((acc, curr) => acc + curr, 0)
    return sumNotPicked * this.#lastMarked
  }

  #removeEmpty(x) {
    return x !== ''
  }

  /** @param {string[]} rows */
  #getNumbers(rows) {
    return new Map(
      rows.flatMap((row, y) =>
        row
          .split(' ')
          .filter(this.#removeEmpty)
          .map((num, x) => [parseInt(num), new NumberSlot(x, y)]),
      ),
    )
  }

  #markRow(rowNumber) {
    this.#markRowCol(rowNumber, this.#rows)
  }

  #markCol(colNumber) {
    this.#markRowCol(colNumber, this.#cols)
  }

  #markRowCol(rowNumber, map) {
    const rowCol = map.get(rowNumber)
    if (rowCol) {
      rowCol.val++
    } else {
      map.set(rowNumber, { val: 1 })
    }
  }

  #isWinner() {
    return (
      [...this.#rows.values()].some((y) => y.val >= this.#width) ||
      [...this.#cols.values()].some((x) => x.val >= this.#height)
    )
  }
}

class NumberSlot {
  #picked = false
  #row
  #col

  constructor(row, col) {
    this.#col = col
    this.#row = row
  }

  get picked() {
    return this.#picked
  }

  markPicked() {
    this.#picked = true
  }

  get row() {
    return this.#row
  }

  get col() {
    return this.#col
  }
}
