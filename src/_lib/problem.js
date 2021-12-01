import { readFileSync } from 'fs'

class Problem {
  #fileName
  #lines
  #linesAsInts

  constructor(fileName) {
    this.#fileName = fileName
    this.#lines = this.#readLines()
    this.#linesAsInts = this.#getLinesAsInts()
  }

  get lines() {
    return this.#lines
  }

  get linesAsInts() {
    return this.#linesAsInts
  }

  #readLines() {
    return readFileSync(this.#fileName, 'utf8').split('\n')
  }

  #getLinesAsInts() {
    return this.#lines.map((line) => parseInt(line))
  }
}

export default Problem
