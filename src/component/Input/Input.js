import React from 'react'
import {StyledInput,StyledSelect,StyledLabel} from './StyledInputs'


const input = (props) => {
    let inputElement = null
    switch(props.type){
        case 'textInput':
            inputElement = <StyledInput type="text" required={props.isRequired} onChange={props.changed} value={props.value}></StyledInput>
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
            inputElement = <StyledInput type="number" value={props.value} onChange={props.changed} required={props.isRequired}></StyledInput>
            break
        default:
            inputElement = <StyledInput value={props.value} onChange={props.changed} required={props.isRequired}></StyledInput>
    }

    const result = props.display ? (<div>
                        <StyledLabel>{props.displayName}</StyledLabel>
                        {inputElement}
                        <span>{props.unitOfMeasure}</span>
                    </div>) : null
    return (
        <div>
            {result}
        </div>
    )

}

export default input;