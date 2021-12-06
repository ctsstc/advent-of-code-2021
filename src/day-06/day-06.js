import Problem from '../_lib/problem.js'

class Day06 extends Problem {
  #fish = this.#initialFish()

  constructor(inputFileName) {
    super(inputFileName)
  }

  solvePart1() {
    const newDaysToSpawn = 8
    const resetDaysToSpawn = 6
    const daysToSpawn = 80
    let newFish = []

    for (let day = 1; day <= daysToSpawn; day++) {
      this.#fish = this.#fish.map((fishDaysToSpawn) => {
        if (fishDaysToSpawn === 0) {
          newFish.push(newDaysToSpawn)
          return resetDaysToSpawn
        } else {
          return fishDaysToSpawn - 1
        }
      })

      this.#fish.push(...newFish)
      newFish = []
    }

    return this.#fish.length
  }

  solvePart2() {
    return parseInt(this.solvePart1())
  }

  #initialFish() {
    return this.lines[0].split(',').map((num) => parseInt(num))
  }
}

export default Day06
