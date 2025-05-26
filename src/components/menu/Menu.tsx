import React from 'react'
import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
    item: {
        name: string;
        path?: string;
        subPath?: string;
        subMenuItems?: { name: string; path: string; }[];
    };
    contextPath?: string;
    isSubMenu: boolean;
    style: any;
}
const Menu = ({ item, isSubMenu = false, contextPath = '', style}: MenuItemProps) => {

  const location = useLocation();
  const currentPath = location.pathname;

  const isSelected = currentPath === contextPath + item.path;
  
  return (
    <div className={isSubMenu ? style.subLinkWrapper : style.linkWrapper} >
        {item.path && !isSelected ? (<Link className={style.link} to={contextPath + item.path}>{item.name}</Link>) : (<span className={isSelected ? style.selectedLink : ''}>{item.name}</span>)}        
        {item.subMenuItems && item.subMenuItems.map((subItem, subIndex) => (
          <Menu key={subIndex} item={subItem} style={style} isSubMenu={true} contextPath={item.subPath}/>
        ))}
      </div>
  )
}

export default Menu