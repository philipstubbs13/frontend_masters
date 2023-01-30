import { useContext, useState } from 'react';
import { ItemsContext } from '../context';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  const { items, add, markAllAsUnpacked, packedItems, unpackedItems } = useContext(ItemsContext)

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header items={items} />
      <NewItem addItem={add} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
        />
      </section>
      <MarkAllAsUnpacked onClick={markAllAsUnpacked} />
    </main>
  );
};

export default Application;
