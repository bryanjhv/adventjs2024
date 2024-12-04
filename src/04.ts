export
function createXmasTree(height: number, ornament: string): string {
  let tree = ''
  for (let i = 1; i <= height; i++) {
    const blank = '_'.repeat(height - i)
    tree += `${blank + ornament.repeat(i * 2 - 1) + blank}\n`
  }
  tree += (`${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}\n`).repeat(2)
  return tree.slice(0, -1)
}
