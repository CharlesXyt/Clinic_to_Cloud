import React from 'react'
import StyledButton from './StyledButton'


const Button = (props) => {
    return <StyledButton onClick={props.onClick} disabled={props.disabled}>Submit</StyledButton>
} 


export default Button;