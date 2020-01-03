import React from 'react'
import  {bmiReferenceProps,headCircumferenceReferenceProps} from '../../assest/exampleData/exampleData'
import InputElement from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import {Form,FormElement} from './StyledForm'

class OnlineSubmit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            bmiProps:bmiReferenceProps,
            headProps:headCircumferenceReferenceProps,
            bmiPropsDisable:true,
            headPropsDisable:true,
            bmiIndex:null
        }
    }

    buttonOnClick = (type) => {
        const formValues = this.state[type].dataElements.map((el) => {return {[el.id]:el.value}})
        const result = Object.assign(...formValues)
        if(type === "bmiProps"){
            const newBmiIndex = parseFloat(result.weight) / (parseFloat(result.height) * parseFloat(result.height) ) * 10000
            this.setState({
                bmiIndex: newBmiIndex.toFixed(2)
            })
            result.bmi = newBmiIndex.toFixed(2)
        }
        console.log(result)
    }


    checkValidity = (element,changedValue) => {
        let valid= true
        if(element.bounds){
            if(element.bounds.upperLimit){
                valid = changedValue < element.bounds.upperLimit && valid
            }
            if(element.bounds.lowerLimit){
                valid = changedValue > element.bounds.lowerLimit && valid
            }
        }
        return valid
    }

    inputChangeHandler = (event,typeId,formType) => {
        const changedValue = event.target.value
        const newProps = {...this.state[formType]}
        const newDataElements = this.state[formType].dataElements.map((el) => {
            if(el.id === typeId){
                return {
                    ...el,
                    value:changedValue,
                    valid:this.checkValidity(el,changedValue)
                }
            }else{
                return {
                    ...el
                }
            }
        })
        const newPropState = {
            ...newProps,
            dataElements:newDataElements
        }
        const disableType = formType + "Disable"
        const isDisable = newDataElements.filter((el) => ! el.valid).length > 0 ? true : false
        this.setState({
            ...this.state,
            [formType]:newPropState,
            [disableType]:isDisable
        })
    }

    render(){
        const formBmi = this.state.bmiProps.dataElements.map((el) => {
            return (
                <InputElement changed={(event) => this.inputChangeHandler(event,el.id,"bmiProps")} key={el.id} {...el}/>
            )
        })
        const formHead = this.state.headProps.dataElements.map((el) => {
            return (
                <InputElement changed={(event) => this.inputChangeHandler(event,el.id,"headProps")} key={el.id} {...el}/>
            )
        })
        return(
            <Form> 
                <FormElement>
                    {formBmi}
                    {this.state.bmiIndex ? <p>BMI: {this.state.bmiIndex}</p> : null}
                    <Button disabled={this.state.bmiPropsDisable} onClick={() => this.buttonOnClick("bmiProps")}/>
                </FormElement>
                <FormElement>
                    {formHead}
                    <Button disabled={this.state.headPropsDisable} onClick={() => this.buttonOnClick("headProps")}/>
                </FormElement>
            </Form>
        )
    }
}

export default OnlineSubmit;