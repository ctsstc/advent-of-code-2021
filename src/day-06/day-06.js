import Problem from '../_lib/problem.js'

class Day06 extends Problem {
  #fish = this.#initialFish()

  constructor(inputFileName) {
    super(inputFileName)
  }

  solvePart1() {
    return this.#runFishForDays(80)
  }

  solvePart2() {
    return this.#runFishForDays(256)
  }

  #initialFish() {
    return this.lines[0].split(',').map((num) => parseInt(num))
  }

  #runFishForDays(daysToSpawn) {
    const newDaysToSpawn = 8
    const resetDaysToSpawn = 6
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
}

export default Day06
