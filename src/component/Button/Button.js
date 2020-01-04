import React from 'react'
import StyledButton from './StyledButton'
import PropTypes from 'prop-types'


const Button = (props) => {
    return <StyledButton onClick={props.onClick} disabled={props.disabled}>Submit</StyledButton>
} 

Button.propTypes = {
    onClick:PropTypes.func,
    disabled:PropTypes.bool
}


export default Button;