import Problem from '../_lib/problem.js'

class Day05 extends Problem {
  #pairPoints = this.#getPairPoints()
  #occurrences = this.#getOccurrences()

  constructor(inputFileName) {
    super(inputFileName)
  }

  solvePart1() {
    return [...this.#occurrences.values()].filter((x) => x.val > 1).length
  }

  solvePart2() {
    return parseInt(this.solvePart1())
  }

  #getPairPoints() {
    return this.lines.map((line) => {
      const [first, second] = line.split(' -> ')
      const firstPoint = first.split(',').map((x) => parseInt(x))
      const secondPoint = second.split(',').map((x) => parseInt(x))
      const [x1, y1] = firstPoint
      const [x2, y2] = secondPoint
      const horizontal = y1 === y2
      const vertical = x1 === x2
      const diagonal = !horizontal && !vertical
      const type = horizontal
        ? 'horizontal'
        : vertical
        ? 'vertical'
        : 'diagonal'
      return { firstPoint, secondPoint, horizontal, vertical, diagonal, type }
    })
  }

  /**
   * @return {Map<string, { val: number }>}
   */
  #getOccurrences() {
    return this.#pairPoints
      .filter(({ diagonal }) => !diagonal)
      .reduce((map, pairPoint) => {
        const { firstPoint, secondPoint, horizontal } = pairPoint
        let [x1, y1] = firstPoint
        let [x2, y2] = secondPoint

        const stable = horizontal ? y1 : x1
        const getKey = (changing) =>
          `${horizontal ? changing : stable},${horizontal ? stable : changing}`

        const changer = horizontal ? [x1, x2] : [y1, y2]
        const [change1, change2] = changer.sort((a, b) => a - b)

        for (let change = change1; change <= change2; change++) {
          const key = getKey(change)
          const coord = map.get(key)

          if (coord) {
            coord.val++
          } else {
            map.set(key, { val: 1 })
          }
        }

        return map
      }, new Map())
  }
}

export default Day05
