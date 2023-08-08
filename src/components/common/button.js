import React from 'react'

function Button(props) {
  return (
    <button type={props.type} onClick={props.action} className={props.className}>{props.value}</button>
  )
}

export default Button