import React from "react";
import { MenuItem } from "./MenuItem"; // Adjust the import path as necessary

interface SubMenuProps {
  items: any[];
  location: any;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, location }) => {
  return (
    <div className="sub-menu">
      {items.map((childItem, index) => (
        <MenuItem
          key={index}
          item={childItem}
          location={location}
          index={index}
        />
      ))}
    </div>
  );
};

export default SubMenu;
