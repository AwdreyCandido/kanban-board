import { useState } from "react";
import CardsContainer from "../cards-container/CardsContainer";

const status: string[] = ["good", "normal", "bad"];

type Data = {
  id: number;
  content: string;
  status: string;
};

export const data: Data[] = [
  {
    id: 1,
    content: "Aqua-man",
    status: "good",
  },
  {
    id: 2,
    content: "Flash",
    status: "normal",
  },
  {
    id: 3,
    content: "Green Lantern",
    status: "good",
  },
  {
    id: 4,
    content: "Batman",
    status: "bad",
  },
];

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(data);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, status: string) => {

     let card = listItems.find(item => item.id == id)

     if(card && card.status != status) {
        card.status = status

        setListItems( prev => ([card, ...prev.filter(item => item.id !== id)]))
     }
  }

  return status.map((container) => {
    return (
      <CardsContainer
        status={container}
        items={data}
        key={container}
        isDragging={isDragging}
        handleDragging={handleDragging}
        handleUpdateList={handleUpdateList}
      />
    );
  });
};

export default DragAndDrop;
