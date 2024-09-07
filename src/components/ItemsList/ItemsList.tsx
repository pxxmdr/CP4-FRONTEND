import { Items, List } from "./ItemList.style";

interface ItemsProps {
  title: string;
  checked: boolean;
}

interface ItemsListProps {
  items: ItemsProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemsProps[]>>;
}

export const ItemList = ({ items, setItems }: ItemsListProps) => {
  return (
    <List>
      {items.map((item, index) => (
        <Items key={`${item.title}-${index}`}>
          <input
            id={item.title + index}
            type="checkbox"
            checked={item.checked}
            onChange={(event) => {
              setItems((itemsData) => {
                const newItems = itemsData.map((itemData, idx) => {
                  if (itemData.title === item.title && index === idx) {
                    itemData.checked = event.target.checked as boolean;
                  }
                  return itemData;
                });

                return newItems;
              });
            }}
          />
          {item.title}
        </Items>
      ))}
    </List>
  );
};
