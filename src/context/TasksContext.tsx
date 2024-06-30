import { createContext, useState } from "react";

interface ITasksProviderContextProps {
  mode: string;
  showModal: boolean;
  showAddModal: () => void;
  showUpdateModal: (id: number) => void;
  closeModal: () => void;
}

export const TasksContext = createContext<ITasksProviderContextProps>({
  mode: "add",
  showModal: false,
  showAddModal: () => {},
  showUpdateModal: () => {},
  closeModal: () => {},
});

const TasksContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [mode, setMode] = useState("add");
  const [showModal, setShowModal] = useState(false);
  const [taskId, setTaskId] = useState<number | null>(null);

  const showAddModal = () => {
    setShowModal(true);
    setMode("add");
  };

  const showUpdateModal = (id: number) => {
    setShowModal(true);
    setMode("update");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const value = {
    mode,
    showModal,
    showAddModal,
    showUpdateModal,
    closeModal,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TasksContextProvider;
