import React from 'react'
import {StyledInput,StyledSelect,StyledLabel,ErrorMessage} from './StyledInputs'
import PropTypes from 'prop-types'
import {TextField } from '@material-ui/core'


const input = (props) => {
    let inputElement = null

    //according to the type, return the inputElement
    switch(props.type){
        case 'textInput':
            inputElement = <TextField
                                id="standard-textarea"
                                label={props.displayName}
                                onChange={props.changed}
                                InputLabelProps={{
                                    type:"text", 
                                    required:props.isRequired,
                                    value:props.value
                                }}
                            />
            // <StyledInput placeholder= ></StyledInput>
            break
        case 'select':
            const defaultOption = props.options.filter((el) => {return el.isDefault})[0].name
            inputElement = (
                <StyledSelect value={props.value ? props.value : defaultOption} onChange={props.changed} required={props.isRequired}>
                    {props.options.map(el => {
                        return (
                            <option 
                                key={el.name + "_"+ el.id} 
                                value={el.name}
                            >{el.name}</option>
                    )})}
                </StyledSelect>
            )
            break
        case 'numberInput':
            inputElement = <StyledInput placeholder={props.displayName} type="number" value={props.value} onChange={props.changed} required={props.isRequired}></StyledInput>
            break
        default:
            inputElement = <StyledInput placeholder={props.displayName} value={props.value} onChange={props.changed} required={props.isRequired}></StyledInput>
    }

    //decide if it needs to be displayed
    const result = props.display ? (<div style={{marginBottom:"5px"}}>
                        <StyledLabel>{props.displayName}</StyledLabel>
                        {inputElement}
                        <span style={{fontSize:"16px"}}>{props.unitOfMeasure}</span>
                        <ErrorMessage>{!props.valid && !props.firstTime ? props.message : null}</ErrorMessage>
                    </div>) : null
    return (
        <div>
            {result}
        </div>
    )

}

input.propTypes = {
    type:PropTypes.string.isRequired,
    valid:PropTypes.bool.isRequired,
    firstTime:PropTypes.bool,
    isRequired:PropTypes.bool,
    changed:PropTypes.func.isRequired,
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    message:PropTypes.string,
    option:PropTypes.arrayOf(PropTypes.object),
    display:PropTypes.bool
}



export default input;