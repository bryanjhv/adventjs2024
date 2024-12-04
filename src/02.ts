export
function createFrame(names: string[]): string {
  let result = ''
  const longest = Math.max(...names.map(name => name.length))
  result += `${'*'.repeat(longest + 4)}\n`
  for (const name of names) {
    result += `* ${name}${' '.repeat(longest - name.length)} *\n`
  }
  result += `${'*'.repeat(longest + 4)}`
  return result
}
