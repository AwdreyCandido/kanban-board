import React, { useContext } from "react";
import Card from "../card/Card";
import { HiPlus } from "react-icons/hi2";
import { TasksContext } from "../../context/TasksContext";

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
  const { showAddModal } = useContext(TasksContext);

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
      className="flex flex-col min-w-[28rem] select-none text-dark"
      onDragOver={handlerDragOver}
      onDrop={handleDrop}
    >
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-sora text-[1.6rem] font-bold ">
            {containerTitle}
          </h3>
          <div
            onClick={showAddModal}
            className="bg-white cursor-pointer h-[2.8rem] w-[2.8rem] flex items-center justify-center  text-[1.6rem] rounded-full shadow-md transition-all duration-300 hover:shadow-none"
          >
            <HiPlus className="stroke-[0.8] text-[#666666]" />
          </div>
        </div>
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
