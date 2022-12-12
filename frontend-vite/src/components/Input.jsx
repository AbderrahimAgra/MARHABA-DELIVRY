import React from "react";

function Input(props) {
  return(
    <div>
      <input type={props.type} className={props.class} id={props.id} onChange={props.onChange} placeholder={props.placeholder} name={props.name}  />
      {/* style={{ backgroundColor: '#1f2937' }} */}
    </div>
  )
}

export default Input
