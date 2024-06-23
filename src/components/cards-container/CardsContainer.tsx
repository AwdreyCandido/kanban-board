import React from "react";
import Card from "../card/Card";

type Data = {
  id: number;
  content: string;
  status: string;
};

type Props = {
  status: string;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateList: (id: number, status: string) => void;
};

const CardsContainer: React.FC<Props> = ({
  status,
  items,
  isDragging,
  handleDragging,
  handleUpdateList,
}) => {
  const handleDragEnd = () => handleDragging(false);

  const handlerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const id = +event.dataTransfer.getData("text");
    handleUpdateList(id, status);
    handleDragging(false);
  };

  return (
    <div
      className="flex flex-col"
      onDragOver={handlerDragOver}
      onDrop={handleDrop}
    >
      <h3>{status}</h3>
      <section className="h-[80vh] bg-[#dbdbdb] p-2 rounded-xl">
        {items.map(
          (card) =>
            card.status == status && (
              <Card key={card.id} info={card} handleDragEnd={handleDragEnd} />
            )
        )}
      </section>
    </div>
  );
};

export default CardsContainer;
