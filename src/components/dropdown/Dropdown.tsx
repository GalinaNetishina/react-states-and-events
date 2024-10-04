import React, { useState } from 'react'
import style from './dropdown.module.css'

type TDropItem = {
    item: string
    isActive: boolean
    onActive():void
}

function DropSwitch({onSwitch}) {
    return (
        <button className={style["btn"]} onClick={onSwitch}>
        <span>Account Settings</span>
        <i className={style["material-icons"]}>public</i>
      </button>
    )
  }

function DropItem({item, isActive, onActive}: TDropItem) {
    return (
        <li 
        className={isActive ? style['active-li']: style["dropdown"]} 
        onClick={onActive}>
            {item}
        </li>
    )
}


export default function Dropdown({menu}: TDropItem[]) {
    const [show, setItems] = useState<boolean>(false);
    const [active, setActive] = useState<string>('Log Out')
    const handleDrop = () => {
        setItems(() => !show)
        }
    const handleActive = (e) =>{
        setActive((prev) => e.currentTarget? e.currentTarget.innerText : prev)
    }
        

    
  
  return (<>
  <div className={style["container"]}>
  <DropSwitch onSwitch={handleDrop}/>
  {show && 
    <div className={style["dropdown-wrapper open"]}>
      <ul className={style["dropdown"]}>
        {menu.map((item)=>
        <DropItem key={item} item={item} isActive={item==active} onActive={handleActive}/>
        )}
      </ul>
    </div>}
  </div>
  </>)
}