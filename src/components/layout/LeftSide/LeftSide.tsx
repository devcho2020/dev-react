import * as style from '@components/layout/LeftSide/leftSide.css'
import Menu from '@/components/menu/Menu';

import { menuItem } from '@/data/menuData'

const LeftSide = () => {
  return (
    <>
      <div className={style.title}>MENU</div>
      <div className={style.menuWrapper}>
        {menuItem.map((item, index) => (
            <Menu key={index} item={item} style={style} isSubMenu={false}/>            
        ))}
      </div>
    </>
  )
}

export default LeftSide