import React from "react";

type PrimaryButtonProps = {
  title: string;
  onClick: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="flex items-center justify-center gap-4 w-full bg-primary py-5 px-8  rounded-xl text-white text-[1.4rem] hover:bg-primary-light border cursor-pointer border-1 hover:border-primary hover:text-primary duration-200 "
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
