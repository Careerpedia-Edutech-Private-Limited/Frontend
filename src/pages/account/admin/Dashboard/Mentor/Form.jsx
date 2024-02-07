import React, { useState } from 'react'

const Form = (props) => {

    const{label, errorMessage, onChange, id, ...inputProps} = props;
    const[focused,setFocused] = useState(false)

    const handleFocus = (e) => {
        setFocused(true);
    }

    
  return (
    <div className='form_inputs'>
        <label>{label}</label> 
      <input {...inputProps} onChange={onChange} onBlur={handleFocus}  />
      <span>{errorMessage}</span>
    </div>
  )
}

export default Form
