import * as style from '@components/layout/LeftSide/leftSide.css'
import { Link } from 'react-router-dom'

import { menuItem } from '@/data/menuData'

const LeftSide = () => {
  return (
    <>
      <div className={style.title}>MENU</div>
      <div className={style.menuWrapper}>
        {
          menuItem.map((item, index) => (
            <div className={style.linkWrapper} key={index}>
              {item.path ? (<Link className={style.link} to={item.path}>{item.name}</Link>) : (<span>{item.name}</span>)}
              {item.subMenuItems && item.subMenuItems.map((subItem, subIndex) => (
                <div className={style.subLinkWrapper} key={subIndex}>
                  {subItem.path ? (<Link className={style.link} to={`${item.subPath ?? ''}${subItem.path}`}>{subItem.name}</Link>) : (<span>{subItem.name}</span>)}
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default LeftSide