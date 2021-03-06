import React from "react"
import style from "./TextInput.css"
import {PropTypes} from "prop-types"

class TextInput extends React.Component{
  componentDidUpdate(){
    this.inputRefEl.focus();
  }
  render(){
    let props = this.props;
    return (
      <input ref={inputRefEl=>this.inputRefEl = inputRefEl} placeholder="Type something" className={style["input-cust-style"]} value={props.inputValue} onChange={props.onChangeEv} onClick={props.handleClick} />
    )
  }

}

TextInput.defaultProps = { inputValue : "" };
TextInput.propTypes = {
  inputValue : PropTypes.string,
  onChangeEv : PropTypes.func.isRequired,
  handleClick : PropTypes.func
};

export default TextInput;
