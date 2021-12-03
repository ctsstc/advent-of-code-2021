import Problem from '../_lib/problem.js'

class Day03 extends Problem {
  constructor(inputFileName) {
    super(inputFileName)
  }

  #lineLength = this.lines[0].length

  #masks = [...this.#initCounts()].reduce((masks, _val, i) => {
    const highBitIndex = this.#lineLength - i - 1
    masks[i] = Math.pow(2, highBitIndex)
    return masks
  }, {})

  #initCounts() {
    return new Array(this.#lineLength).fill(0)
  }

  #fullFlagMask = parseInt(Array(this.#lineLength).fill(1).join(''), 2)

  // Could convert each line into decimal and then iterate through the length 2^(0-5) bitwise AND
  // Trying to prevent maximum walking per 2D array
  #columnCommonality = this.lines
    .map((line) => parseInt(line, 2)) // convert to decimal
    .reduce((counts, lineDecimal) => {
      for (let i = 0; i < this.#lineLength; i++) {
        const flagBit = this.#masks[i]
        if (lineDecimal & flagBit) counts[i]++
      }
      return counts
    }, this.#initCounts())

  solvePart1() {
    const halfLineCount = this.lines.length / 2
    const binaryString = this.#columnCommonality
      .map((count) => (count >= halfLineCount ? 1 : 0))
      .join('')
    const decimal = parseInt(binaryString, 2)
    const invertedDecimal = decimal ^ this.#fullFlagMask

    return decimal * invertedDecimal
  }

  solvePart2() {
    return parseInt(this.solvePart1())
  }
}

export default Day03
