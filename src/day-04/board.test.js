import Board from './board'

describe('Board', () => {
  /** @type {Board} */
  let board

  beforeEach(() => {
    board = new Board([
      '22 13 17 11  0',
      ' 8  2 23  4 24',
      '21  9 14 16  7',
      ' 6 10  3 18  5',
      ' 1 12 20 15 19',
    ])
  })

  it('has a vertical winner', () => {
    expect(board.isWinner).toEqual(false)

    board.mark(13)
    expect(board.isWinner).toEqual(false)

    board.mark(2)
    expect(board.isWinner).toEqual(false)

    board.mark(9)
    expect(board.isWinner).toEqual(false)

    board.mark(10)
    expect(board.isWinner).toEqual(false)

    board.mark(12)
    expect(board.isWinner).toEqual(true)
  })

  it('has a horizontal winner', () => {
    expect(board.isWinner).toEqual(false)

    board.mark(6)
    expect(board.isWinner).toEqual(false)

    board.mark(10)
    expect(board.isWinner).toEqual(false)

    board.mark(5)
    expect(board.isWinner).toEqual(false)

    board.mark(18)
    expect(board.isWinner).toEqual(false)

    board.mark(3)
    expect(board.isWinner).toEqual(true)
  })
})
