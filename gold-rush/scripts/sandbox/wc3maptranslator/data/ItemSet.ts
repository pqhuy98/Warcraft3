interface ItemSet {
  items: DroppableItem[]
}

interface DroppableItem {
  itemId: string,
  chance: number
}

export type { ItemSet, DroppableItem }
