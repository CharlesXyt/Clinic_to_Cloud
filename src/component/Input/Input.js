import React from 'react'
import {StyledInput,StyledSelect} from './StyledInputs'


const input = (props) => {
    let inputElement = null
    switch(props.elementType){
        case 'input':
            inputElement = <StyledInput></StyledInput>
        case 'select':
        inputElement = 
            <StyledSelect>
                {props.options.map(el => {
                    return (
                        <option 
                            key={el.name + "_"+ el.id} 
                            value={el.name} 
                            selected={el.isDefault ? 'selected' : ''}
                        >{el.name}</option>
                    )
                })}
            </StyledSelect>
        default:
            inputElement = <StyledInput></StyledInput>
    }

    return (
        <div>
            {inputElement}
        </div>
    )

}