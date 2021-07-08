import React from "react";
import { NavLink } from "react-router-dom";
import { navlist } from "./navlist";
import "./index.css";
export const NavList = ({setClickIndex,clickIndex, theme}) => {
  // const [clickIndex, setClickIndex] = useState(0)
   //console.log(1111,clickIndex)
    return (
        <div className={"yo-nav"}>
            {navlist().map((Item,index) => {
                return (
                    <div className="nav-item">
                        <NavLink onClick={()=>setClickIndex(index)  } activeClassName={`yo-action`} to={ Item.link } className="nav-item-cell">
                            <div className={"nav-img"}>
                                <Item.Icon isClick={clickIndex === index} />
                            </div>
                            <div className={'item-w'}>{Item.title}</div>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
};
