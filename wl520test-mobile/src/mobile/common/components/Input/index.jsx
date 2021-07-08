import React, { useRef, useState } from "react";
import "./index.css";
const YInput = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();
  const changeHandel = (e) => {
    props.onChange ? props.onChange(e) : "";
    // setIsFocus
    // console.log("in", inputRef.current);
    inputRef.current.value ? setIsFocus(true) : setIsFocus(false);
  };
  return (
    <div className={`yo-inline-b ${props.className || ""}`}>
      <input
        { ...props }
        type={props.type || "text"}
        ref={inputRef}
        className={'yo-input'}
        onChange={changeHandel}
      />
      <span className={`yo-lable ${isFocus && props.value ? 'yo-input-focus' : ""}`}>
        {props.label || "label"}
      </span>
    </div>
  );
};
export default YInput;
