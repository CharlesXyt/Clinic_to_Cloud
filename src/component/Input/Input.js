import React from 'react'
import {ErrorMessage} from './StyledInputs'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from '@material-ui/core'

const useStyles = makeStyles({
    select: {
      width:"100%"
    },
  });



function CustomInput(props){
    let inputElement = null
    const classes = useStyles(props);
    //according to the type, return the inputElement
    switch(props.type){
        case 'textInput':
            inputElement = <TextField
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
                <FormControl required={props.isRequired}>
                    <InputLabel>{props.displayName}</InputLabel>
                    <Select
                    className={classes.select}
                    value={props.value ? props.value : defaultOption}
                    onChange={props.changed}
                    >
                    {props.options.map(el => {
                        return (
                            <MenuItem 
                                key={el.name + "_"+ el.id} 
                                value={el.name}
                            >{el.name}</MenuItem>
                    )})}
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            )
            break
        case 'numberInput':
            inputElement = <TextField
                                label={props.displayName+"/"+props.unitOfMeasure}
                                onChange={props.changed}
                                InputLabelProps={{
                                    type:"number", 
                                    required:props.isRequired,
                                    value:props.value
                                }}
                            />
            break
        default:
            inputElement = <TextField/>
    }

    //decide if it needs to be displayed
    const result = props.display ? (<div style={{marginBottom:"5px"}}>
                                    {inputElement}
                                    <ErrorMessage>{!props.valid && !props.firstTimeLoading ? props.message : null}</ErrorMessage>
                                </div>) : null
    return (
        <div>
            {result}
        </div>
    )

}

CustomInput.propTypes = {
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



export default CustomInput;