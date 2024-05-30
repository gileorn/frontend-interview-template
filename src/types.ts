export interface Item {
  id: string;
  title: string;
  emoji: string;
}

export interface ItemExpanded extends Item {
  parentId?: number;
  children: ItemExpanded[];
}
