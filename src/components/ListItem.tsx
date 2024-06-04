// here you can write styles
import "./ListItem.css";
//here is the ts type of the data
import { Item } from "../types";
import React, { useState } from "react";
// here are the icons if you need them
import { ChevronRight, ChevronDown } from "react-feather";
// here is the method to get the data
// const result = await getDocumentChildItems()
import { getDocumentChildItems } from "../actions/getItems";

type RemoteData<T> =
  | { tag: 'initial' }
  | { tag: 'loading' }
  | { tag: 'error' }
  | { tag: 'ok', data: T }

interface Props {
  readonly item: Item;
}


const renderRemoteData = (rd: RemoteData<ReadonlyArray<Item>>) => {
  switch (rd.tag) {
    case 'initial':
      return null;
    case 'loading':
      return 'Загрузка ...'
    case 'error':
      return "Ошибка"
    case 'ok':
      return rd.data.map(subItem => <li className='subItem' key={subItem.id}>
        <ListItem item={subItem} /></li>)
  }
}

export const ListItem = ({ item }: Props) => {
  const [isOpened, setIsOpened] = useState(false)
  const [subItems, setSubItems] = useState<RemoteData<ReadonlyArray<Item>>>({ tag: 'initial' })

  const onOpen = async (id: Item['id']) => {
    setSubItems({ tag: 'loading' })
    try {
      const fetchedSubItems = await getDocumentChildItems(id)
      console.log(fetchedSubItems)

      setSubItems({ tag: 'ok', data: fetchedSubItems })
    } catch {
      setSubItems({ tag: 'error', })
    }
  }

  return (<div className='root'>
    <div className='button'>
      <button type='button' onClick={() => {
        setIsOpened(!isOpened)
        if(subItems.tag !== 'ok') {          onOpen()        }
      }} className='toggle'>{isOpened ? <ChevronDown /> : <ChevronRight />}
      </button>
      <div className='title'>
        <span className='icon'>{item.emoji}</span>
        <span className='text'>{item.title}</span>
      </div>
    </div>
    
    <ul className='subItems'>
      {isOpened ? renderRemoteData(subItems) : null}
    </ul>
  </div>);
};
