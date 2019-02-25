import React from "react"
import SearchBox from "../SearchBox/SearchBox"
import style from "./Layout.css"

class Layout extends React.Component{
  render(){
    return (
      <div className={style.container}>
        <div className={style["box-modal-container"]}>
          <div className={style["box-modal"]}>
            <div className={style["box-container"]}>
            <SearchBox />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
