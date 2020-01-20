import React from 'react'
import PropTypes from 'prop-types'
import {Button} from "@material-ui/core"


const styledButton = (props) => {
    return <Button  variant="contained" onClick={props.onClick} disabled={props.disabled}>Submit</Button>
} 

styledButton.propTypes = {
    onClick:PropTypes.func,
    disabled:PropTypes.bool
}


export default styledButton;