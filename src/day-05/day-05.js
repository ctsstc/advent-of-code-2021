import Problem from '../_lib/problem.js'

class Day05 extends Problem {
  #pairPoints = this.#getPairPoints()
  #occurrences1 = this.#getOccurrences1()
  #occurrences2 = this.#getOccurrences2()

  constructor(inputFileName) {
    super(inputFileName)
  }

  solvePart1() {
    return [...this.#occurrences1.values()].filter((x) => x.val > 1).length
  }

  solvePart2() {
    return [...this.#occurrences2.values()].filter((x) => x.val > 1).length
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
  #getOccurrences1() {
    return this.#pairPoints
      .filter(({ diagonal }) => !diagonal)
      .reduce((map, pairPoint) => {
        const { firstPoint, secondPoint, horizontal } = pairPoint
        const [x1, y1] = firstPoint
        const [x2, y2] = secondPoint

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

  /**
   * @return {Map<string, { val: number }>}
   */
  #getOccurrences2() {
    // clone the first answer's map to build upon
    const occurrences1Copy = this.#getOccurrences1()

    return this.#pairPoints
      .filter(({ diagonal }) => diagonal)
      .reduce((map, pairPoint) => {
        const { firstPoint, secondPoint } = pairPoint
        const [x1, y1] = firstPoint
        const [x2, y2] = secondPoint

        const positiveX = x1 < x2
        const positiveY = y1 < y2
        const xChange = positiveX ? 1 : -1
        const yChange = positiveY ? 1 : -1

        const diff = Math.abs(x1 - x2)

        let cx = x1
        let cy = y1
        for (let i = 0; i <= diff; i++) {
          const key = `${cx},${cy}`
          cx += xChange
          cy += yChange
          // console.log('DIAG KEY', key)
          const coord = map.get(key)

          if (coord) {
            coord.val++
          } else {
            map.set(key, { val: 1 })
          }
        }

        return map
      }, occurrences1Copy)
  }
}

export default Day05
