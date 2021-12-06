import Problem from '../_lib/problem.js'

class Day06 extends Problem {
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
      .reduce(
        (counts, num) => {
          counts[num]++
          return counts
        },
        {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
        },
      )
  }

  #runFishForDays(fish, daysToSpawn) {
    const newDaysToSpawn = 8
    const resetDaysToSpawn = 6
    let newFish = 0

    for (let day = 1; day <= daysToSpawn; day++) {
      newFish = fish[0]
      for (let i = 1; i <= newDaysToSpawn; i++) {
        fish[i - 1] = fish[i]
      }
      fish[newDaysToSpawn] = newFish
      fish[resetDaysToSpawn] += newFish
    }

    return Object.values(fish).reduce((sum, fish) => sum + fish, 0)
  }
}

export default Day06
