import React from 'react'
import {StyledInput,StyledSelect} from './StyledInputs'


const input = (props) => {
    let inputElement = null
    switch(props.type){
        case 'textInput':
            inputElement = <StyledInput></StyledInput>
            break
        case 'select':
            inputElement = (
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
            )
            break
        default:
            inputElement = <StyledInput></StyledInput>
    }

    return (
        <div>
            {inputElement}
        </div>
    )

}

export default input;