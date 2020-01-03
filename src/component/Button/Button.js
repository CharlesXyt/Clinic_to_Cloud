import React from 'react'
import StyledButton from './StyledButton'


const Button = (props) => {
    return <StyledButton onClick={props.onClick}>Submit</StyledButton>
} 


export default Button;