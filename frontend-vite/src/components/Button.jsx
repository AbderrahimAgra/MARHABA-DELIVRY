import React from "react"

function Button(props) {
  return(
      <button type={props.type}  onClick={props.onclick} class={props.class}>{props.btn}</button>
  )
}

export default Button