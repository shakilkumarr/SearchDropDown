import React from "react"
import style from "./PopupContainer.css"
import {PropTypes} from "prop-types"

class PopupContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let props = this.props;
    let containerVisiblity = props.showList ? "list-container-show" : "list-container-hide"
    return (
      <div className={style["list-container"] + " "+ style[containerVisiblity]}>
        {
          this.props.dataArr && this.props.dataArr.map((listStr,index)=>{
            return (
              <div
                className={style["list-cust"]}
                key={listStr +"_"+index}
                onClick={()=>{this.props.handleListSelEv(listStr)}}>
                {listStr}
              </div>
            )
          })
        }
      </div>
    )
  }
}

PopupContainer.propTypes = {
  dataArr : PropTypes.array.isRequired,
  showList : PropTypes.bool.isRequired,
  handleListSelEv : PropTypes.func.isRequired
};

export default PopupContainer;
