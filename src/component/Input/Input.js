import React from 'react'
import {StyledInput,StyledSelect,StyledLabel} from './StyledInputs'


const input = (props) => {
    let inputElement = null
    switch(props.type){
        case 'textInput':
            inputElement = <StyledInput required={props.isRequired}></StyledInput>
            break
        case 'select':
            const defaultOption = props.options.filter((el) => {return el.isDefault}).name
            inputElement = (
                <StyledSelect value={defaultOption} required={props.isRequired}>
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
            inputElement = <StyledInput required={props.isRequired}></StyledInput>
            break
        default:
            inputElement = <StyledInput required={props.isRequired}></StyledInput>
    }

    return (
        <div>
            <StyledLabel>{props.displayName}</StyledLabel>
            {inputElement}
            <span>{props.unitOfMeasure}</span>
        </div>
    )

}

export default input;