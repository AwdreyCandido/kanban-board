import { HiOutlineX } from "react-icons/hi";
import PrimaryButton from "../buttons/PrimaryButton";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

const CardModal = () => {
  const { mode, showModal, closeModal } = useContext(TasksContext);

  return (
    <div className="absolute h-[100vh] w-[100vw] flex items-center z-100 top-0 left-0 text-dark">
      <div
        onClick={closeModal}
        className=" aspect-video bg-black-20 backdrop-blur-sm drop-shadow-[20rem]  h-[100vh] w-[100vw] flex items-center cursor cursor-pointer"
      ></div>
      <dialog
        className="w-[45rem] h-fit p-8 shadow-md justify-self-center rounded-[1rem] font-dm"
        aria-modal="true"
        open={showModal}
      >
        <div className="flex justify-between">
          <h1 className="text-[2.5rem] text-dark font-bold mb-8 font-sora">
            {mode === "add" ? "Add New Task" : "Edit Task"}
          </h1>
          <div
            onClick={closeModal}
            className="bg-white cursor-pointer h-[2.8rem] w-[2.8rem] text-[3rem]"
          >
            <HiOutlineX className="stroke-[1.4] text-dark" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[1.3rem] font-sora font-medium">Title</label>
          <input className="bg-[#F4F5F7] h-[3.5rem] py-3 px-4 rounded-xl text-[1.4rem] leading-tight outline-0" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[1.3rem] font-sora font-medium">
            Description
          </label>
          <textarea
            maxLength={200}
            rows={4}
            className="bg-[#F4F5F7] rounded-xl py-3 px-4 resize-none text-[1.4rem] leading-tight outline-0"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[1.3rem] font-sora font-medium">Tags</label>
          <input className="bg-[#F4F5F7] h-[3.5rem] py-3 px-4 rounded-xl text-[1.4rem] leading-tight outline-0 border border-black-40 border-dashed " />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[1.3rem] font-sora font-medium">
            Add Members
          </label>
          <input className="bg-[#F4F5F7] h-[3.5rem] py-3 px-4 rounded-xl text-[1.4rem] leading-tight outline-0 border border-black-40 border-dashed " />
        </div>
        <div className="mt-[4rem]">
          <PrimaryButton title="Adicionar" onClick={() => {}} />
        </div>
      </dialog>
    </div>
  );
};

export default CardModal;
