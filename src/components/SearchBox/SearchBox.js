import React from "react"
import PopupContainer from "../PopupContainer/PopupContainer"
import TextInput from "../TextInput/TextInput"
import mockDataArr from "../../api/mockData"
import filterData from "../../_utils/filterData"
import style from "./SearchBox.css"

class SearchBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dataArr : mockDataArr,
      textValue : "",
      showList : false,
      containerVisiblity : "hide"
    }
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleListSelEv = this.handleListSelEv.bind(this);
    this.toggleInputView = this.toggleInputView.bind(this);
    this.handleDocMouseEv = this.handleDocMouseEv.bind(this);
    this.handleDocKeyEv = this.handleDocKeyEv.bind(this);
  }
  componentWillMount(){
      document.addEventListener("mousedown",this.handleDocMouseEv,false);
      document.addEventListener("keyup",this.handleDocKeyEv,false);
  }
  componentWillUnMount(){
      document.removeEventListener("mousedown",this.handleDocMouseEv,false);
      document.removeEventListener("keyup",this.handleDocKeyEv,false);
  }
  handleDocMouseEv(ev){
    if(!this.refEl.contains(ev.target)){
      this.toggleInputView("hide");
    }
  }
  handleDocKeyEv(ev){
    if(ev.keyCode === 13){
      this.toggleInputView("show");
    }
    else if(ev.keyCode === 27){
      this.toggleInputView("hide");
    }
  }
  handleTextInput(event){
    let value = event.target.value;
    let dataArr = mockDataArr;
    if(value && value.trim().length){
      dataArr = filterData(dataArr,value);
    }
    this.setState((state)=>{
      let result = Object.assign({},state);
      result.dataArr = dataArr;
      result.textValue = value
      result.showList = true
      return result;
    });
  }
  toggleInputView(action){
    this.setState((state)=>{
      let result = Object.assign({},state);
      if(action === "show"){
        result.containerVisiblity = "show";
        result.textValue = "";
      }
      else{
        result.containerVisiblity = "hide";
        result.textValue = "";
        result.showList = false;
      }
      return result;
    });
  }
  handleListSelEv(val){
    this.setState((state)=>{
      let result = Object.assign({},state);
      result.textValue = val;
      result.showList = false;
      result.dataArr = filterData(state.dataArr,val);
      return result;
    });
  }
  handleClick(){
    this.setState((state)=>{
      let result = Object.assign({},state);
      result.showList = !state.showList;
      return result;
    });
  }
  render(){
    return (
      <div ref={refEl=>this.refEl = refEl}>
        <div className={style.container+" "+style["container_"+this.state.containerVisiblity]}>
          <img className={style["search-img"]} src="images/search.png" onClick={()=>{this.toggleInputView("show")}} />
          <TextInput inputValue={this.state.textValue} onChangeEv={this.handleTextInput} handleClick={this.handleClick} />
          <img className={style["close-icon"]} src="images/close.png" onClick={()=>{this.toggleInputView("hide")}}/>
        </div>
        <PopupContainer showList={this.state.showList} handleListSelEv={this.handleListSelEv} dataArr={this.state.dataArr}/>
      </div>
    )
  }

}

export default SearchBox;
