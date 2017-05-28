import { square, timeout } from '~/lib'

console.log('Hello world!')
console.log(square(2))

async function f() {
  console.log('Waiting...')
  await timeout(3000)
  console.log('Finished!')
}

f()

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
console.log('x =')
console.log(x)
console.log('y =')
console.log(y)
console.log('z =')
console.log(z)
const n = { x, y, ...z }
console.log('n =')
console.log(n) // { x: 1, y: 2, a: 3, b: 4 }
