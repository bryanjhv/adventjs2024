type Inventory = Array<
  { name: string, quantity: number, category: string }
>

export
function organizeInventory(inventory: Inventory): object {
  return inventory.reduce((result, toy) => {
    result[toy.category] ??= {}
    result[toy.category]![toy.name] ??= 0
    result[toy.category]![toy.name]! += toy.quantity
    return result
  }, {} as Record<string, Record<string, number>>)
}
