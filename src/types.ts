export interface Item {
  id: number;
  title: string;
  emoji: string;
}

export interface ItemExpanded extends Item {
  parentId?: number;
  children: ItemExpanded[];
}
