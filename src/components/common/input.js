import React from 'react'

function Input(props) {
    return (
        <input required type={props.type} placeholder={props.placeholder} className={props.className} value={props.value} onChange={props.onChange} name={props.name} minLength={props.min} />
    )
};

export default Input;