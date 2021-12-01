import 'zx/globals'

const day = await question('What day number would you like to create? ')
const baseDirectory = './src/day-00'
const newDirectory = './src/day-' + day
const extension = 'js'

await $`cp -r ${baseDirectory} ${newDirectory}`

await Promise.all([
  $`mv ${newDirectory}/day-00.${extension} ${newDirectory}/day-${day}.${extension}`,
  $`mv ${newDirectory}/day-00.test.${extension} ${newDirectory}/day-${day}.test.${extension}`,
])

cd(newDirectory)
await $`sed -i 's/Day 00/Day ${day}/g' *`
await $`sed -i 's/Day00/Day${day}/g' *`
await $`sed -i 's/day-00/day-${day}/g' *`

console.log(`Finished creating: Day ${day} at ${newDirectory}`)
