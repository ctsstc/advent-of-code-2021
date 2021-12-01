import { readFile, readFileSync } from 'fs'

class Problem {
  #fileName
  #lines

  constructor(fileName) {
    this.#fileName = fileName
    this.#lines = this.#readLines()
  }

  get lines() {
    return this.#lines
  }

  get linesAsInts() {
    return this.#lines.map((line) => parseInt(line))
  }

  #readLines() {
    return readFileSync(this.#fileName, 'utf8').split('\n')
  }
}

export default Problem
