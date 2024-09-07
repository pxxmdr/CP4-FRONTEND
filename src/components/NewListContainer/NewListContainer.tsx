import { useState } from "react";
import { AddList } from "../AddList/AddList";
import { ItemList } from "../ItemsList/ItemsList";
import { items } from "../../mocks/Items";

interface ItemsProps {
    title: string;
    checked: boolean;
  }

export const NewListContainer = () => {
const [itemsList, setItemsList] = useState <ItemsProps[]>(items)
  return (
    <>
      <AddList setItems={setItemsList}/>
      <ItemList items={itemsList} setItems={setItemsList}/>
    </>
  );
};
