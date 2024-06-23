
type Props = {
  info: any;
  handleDragEnd: () => void;
};

const Card: React.FC<Props> = ({ handleDragEnd, info }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", `${info.id}`);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ cursor: "grab" }}
      className="bg-white w-[25rem] min-h-min flex flex-col gap-4 py-4 px-6 rounded-2xl border border-[#e0e0e0] shadow-md hover:shadow-none transition-all duration-300 "
    >
      <h3 className="font-bold text-[1.6rem] select-none">{info.content}</h3>
      <div className="flex items-center justify-between">
        <p className="py-1 px-3 bg-red-200 text-2xl rounded-full select-none">
          tags
        </p>
        <div className="h-[3rem] w-[3rem] rounded-full bg-red-500"></div>
      </div>
    </div>
  );
};

export default Card;
