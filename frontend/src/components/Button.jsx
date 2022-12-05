import React from "react"

function Button(props) {
  return(
      <button type={props.type} class={props.class}>{props.btn}</button>
  )
}

export default Button