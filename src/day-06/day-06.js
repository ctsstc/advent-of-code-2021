import Problem from '../_lib/problem.js'

class Day06 extends Problem {
  #newDaysToSpawn = 8
  #resetDaysToSpawn = 6
  #fish = this.#initialFish()

  constructor(inputFileName) {
    super(inputFileName)
  }

  solvePart1() {
    return this.#runFishForDays({ ...this.#fish }, 80)
  }

  solvePart2() {
    return this.#runFishForDays({ ...this.#fish }, 256)
  }

  #initialFish() {
    return this.lines[0]
      .split(',')
      .map((num) => parseInt(num))
      .reduce((counts, num) => {
        counts[num]++
        return counts
      }, this.#emptySpawnDates())
  }

  #emptySpawnDates() {
    // Wish we had ranges in JS
    return [...Array(this.#newDaysToSpawn + 1)].reduce((counts, _, i) => {
      counts[i] = 0
      return counts
    }, {})
  }

  #runFishForDays(fish, daysToSpawn) {
    for (let day = 1; day <= daysToSpawn; day++) {
      let newFish = fish[0]
      for (let i = 1; i <= this.#newDaysToSpawn; i++) {
        fish[i - 1] = fish[i]
      }
      fish[this.#newDaysToSpawn] = newFish
      fish[this.#resetDaysToSpawn] += newFish
    }

    return Object.values(fish).reduce((sum, fish) => sum + fish, 0)
  }
}

export default Day06
