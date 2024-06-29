import React from "react";
import Card from "../card/Card";

type Props = {
  status: string;
  items: Card[];
  isDragging: boolean;
  handleDragging: () => void;
  handleUpdateList: (id: number, status: string) => void;
};

const CardsContainer: React.FC<Props> = ({
  status,
  items,
  isDragging,
  handleDragging,
  handleUpdateList,
}) => {
  const handleDragStart = function (
    this: number,
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.dataTransfer.setData("text", `${this}`);
    handleUpdateList(this, status);
    handleDragging();
  };

  const handleDragEnd = () => handleDragging();

  const handlerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const id = +event.dataTransfer.getData("text");
    handleUpdateList(id, status);
    handleDragging();
  };

  const borderStyle =
    status == "todo"
      ? "border-danger"
      : status == "doing"
      ? "border-warning"
      : "border-success";

  const containerTitle =
    status == "todo" ? "To-Do" : status == "doing" ? "Doing" : "Done";

  return (
    <div
      className="flex flex-col min-w-[28rem] select-none"
      onDragOver={handlerDragOver}
      onDrop={handleDrop}
    >
      <div className="mb-4">
        <h3 className="font-sora text-[1.6rem] font-bold mb-2">{containerTitle}</h3>
        <div className={`border-b-[3px] ${borderStyle}`}></div>
      </div>
      <section className="h-[80vh] max-h-[80vh] overflow-y-auto rounded-xl pb-4">
        {items.map(
          (card) =>
            card.status == status && (
              <Card
                key={card.id}
                info={card}
                isDragging={isDragging}
                handleDragStart={handleDragStart}
                handleDragEnd={handleDragEnd}
              />
            )
        )}
      </section>
    </div>
  );
};

export default CardsContainer;
