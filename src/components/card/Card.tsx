import styles from "./Card.module.css";

type Props = {
  info: Card;
  isDragging: boolean;
  handleDragStart: (
    this: number,
    event: React.DragEvent<HTMLDivElement>
  ) => void;
  handleDragEnd: () => void;
};

const Card: React.FC<Props> = ({
  info,
  isDragging,
  handleDragStart,
  handleDragEnd,
}) => {
  const borderStyle =
    info.status == "todo"
      ? "border-danger"
      : info.status == "doing"
      ? "border-warning"
      : "border-success";

  return (
    <div
      draggable
      onDragStart={handleDragStart.bind(info.id)}
      onDragEnd={handleDragEnd}
      className={`bg-white w-full min-h-min max-w-[28rem] flex flex-col mt-3 gap-4 py-3 px-6 rounded-2xl border-[1.5px] ${borderStyle} shadow-md hover:shadow-none transition-all duration-300 ${styles.grabbable}`}
    >
      <h3 className="font-medium font-sora text-[1.6rem] select-none">
        {info.content}
      </h3>
      <p className="font-dm text-[1.0rem]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        enim accusamus laboriosam expedita, odio neque ullam.
      </p>
      <div className="flex items-top gap-4 justify-between">
        <div className="flex flex-wrap w-fit h-fit gap-2">
          {info.tags.map((tag) => (
            <div className=" flex items-center gap-2 bg-danger-light px-3 py-[0.15rem] text-xl rounded-lg font-dm ">
              <div className="h-[0.7rem] w-[0.7rem] rounded-full bg-danger"></div>
              <p className="  select-none">{tag}</p>
            </div>
          ))}
        </div>
        <div className="min-h-[3rem] min-w-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-danger"></div>
      </div>
    </div>
  );
};

export default Card;
