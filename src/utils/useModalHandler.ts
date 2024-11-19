import { useModalState } from "../zustand/Modal";
import { ModalEnum } from "../enums/Model";

const useModalHandler = () => {
  const { setIsOpen } = useModalState((state) => state);

  const handel_open_model = (ENUM: ModalEnum) => {
    setIsOpen(ENUM);
  };

  return { handel_open_model };
};

export default useModalHandler;
