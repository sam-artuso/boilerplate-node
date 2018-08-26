export function output(text) {
  process.stdout.write(`${text}\n`)
}

export function square(x) {
  return x * x
}

export const timeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay))
