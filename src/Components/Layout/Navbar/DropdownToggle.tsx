import { MdExpandLess, MdExpandMore } from "react-icons/md";

interface DropdownToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ isOpen, onClick }) => {
  return (
    <div className="DropDownIcon" onClick={onClick}>
      {isOpen ? <MdExpandLess /> : <MdExpandMore />}
    </div>
  );
};

export default DropdownToggle;
