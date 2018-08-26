import 'make-promises-safe'
import { output, square, timeout } from '~/lib'

(async function main() {
  output(`2² = ${square(2)}`)

  const delay = 3
  output(`Waiting for ${delay} seconds...`)
  await timeout(delay * 1000)
  output('Finished!')
}())
