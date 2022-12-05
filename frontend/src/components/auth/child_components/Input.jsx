import React from "react";

function Input(props) {
  return(
    <div>
      <input type={props.type} className={props.class} id={props.id} placeholder={props.placeholder} name={props.name} />
    </div>
  )
}

export default Input