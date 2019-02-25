import React from "react"
import PopupContainer from "../PopupContainer/PopupContainer"
import TextInput from "../TextInput/TextInput"
import style from "./SearchBox.css"

class SearchBox extends React.Component{
  render(){
    return (
      <div className={style.container}>
        <TextInput />
        <PopupContainer />
      </div>
    )
  }
}

export default SearchBox;
