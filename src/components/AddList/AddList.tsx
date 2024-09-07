import { BsPlusCircle } from "react-icons/bs";
import { Form, Input, Label } from "./AddList.style";
import React, { useState } from "react";

interface ItemsProps {
  title: string;
  checked: boolean;
}
interface AddListProps {
  setItems: React.Dispatch<React.SetStateAction<ItemsProps[]>>;
}

export const AddList = ({ setItems }: AddListProps) => {
  const [itemValue, setitemValue] = useState("");
  return (
    <>
      <Label>Adicionar item</Label>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setItems((items) => [...items, { title: itemValue, checked: false }]);
        }}
      >
        <Input
          value={itemValue}
          type="text"
          placeholder="Digite o item desejado"
          required
          onChange={(event) => {
            setitemValue(event.target.value);
          }}
        />
        <button type="submit">
          <BsPlusCircle />
        </button>
      </Form>
    </>
  );
};
