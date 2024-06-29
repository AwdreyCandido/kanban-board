import { useState } from "react";
import CardsContainer from "../cards-container/CardsContainer";
import { data, status } from "../utils/data";

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Card[]>(data);

  const handleDragging = () => setIsDragging(!isDragging);

  const handleUpdateList = (id: number, status: string) => {
    let card = listItems.find((item) => item.id == id);

    if (card && card.status != status) {
      card.status = status;

      setListItems((prev) => [card, ...prev.filter((item) => item.id !== id)]);
    }
  };

  return (
    <div className="flex gap-12">
      {status.map((container) => {
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
      })}
    </div>
  );
};

export default DragAndDrop;
