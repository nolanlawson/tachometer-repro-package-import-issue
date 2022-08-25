import "@stdlib/utils-noop"

export default function test() {
  const start = Date.now()
  while (Date.now() - start < 100) {}
  return true
}
