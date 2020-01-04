import React from 'react'
import InputElement from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import {Form,FormElement} from './StyledForm'
import PropTypes from 'prop-types'

class OnlineSubmit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            bmiProps:props.bmi,
            headProps:props.head,
            bmiPropsDisable:true,
            headPropsDisable:true,
            bmiIndex:null,
            bmiPropsFirstTimeLoading:true,
            headPropsFirstTimeLoading:true
        }
    }

    componentDidMount(){
        this.setState({
            bmiPropsFirstTimeLoading:true,
            headPropsfirstTimeLoading:true
        })
    }

    //after clicking the button, log the results and set the bmi value
    buttonOnClick = (type) => {
        const formValues = this.state[type].dataElements.map((el) => {return {[el.id]:el.value}})
        const result = Object.assign(...formValues)
        if(type === "bmiProps"){
            const newBmiIndex = parseFloat(result.weight) / (parseFloat(result.height) * parseFloat(result.height) ) * 10000
            this.setState({
                bmiIndex: newBmiIndex.toFixed(1),
                bmiPropsFirstTimeLoading:true,
            })
            result.bmi = newBmiIndex.toFixed(1)
        }
        if(type === "headProps"){
            this.setState({
                headPropsFirstTimeLoading:true
            })
        }
        console.log(result)
        
    }

    //check the element if it satisfies the requirements
    checkValidity = (element,changedValue) => {
        let valid= true
        if(element.bounds){
            if(element.bounds.upperLimit){
                valid = changedValue < element.bounds.upperLimit && valid
            }
            if(element.bounds.lowerLimit===0 || element.bounds.lowerLimit ){
                valid = changedValue > element.bounds.lowerLimit && valid
            }
        }
        if(element.id === "name"){
            const re = /[A-Za-z]+\s+[A-Za-z]+/
            return re.test(changedValue)
        }
        return valid
    }

    //handle the inputchange
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
        const firstLoading = formType + "FirstTimeLoading"
        const isDisable = newDataElements.filter((el) => ! el.valid).length > 0 ? true : false
        this.setState({
            ...this.state,
            [formType]:newPropState,
            [disableType]:isDisable,
            [firstLoading]:false
        })
    }

    render(){
        const formBmi = this.state.bmiProps.dataElements.map((el) => {
            return (
                <InputElement firstTime={this.state.bmiPropsFirstTimeLoading} changed={(event) => this.inputChangeHandler(event,el.id,"bmiProps")} key={el.id} {...el}/>
            )
        })
        const formHead = this.state.headProps.dataElements.map((el) => {
            return (
                <InputElement firstTime={this.state.headPropsFirstTimeLoading} changed={(event) => this.inputChangeHandler(event,el.id,"headProps")} key={el.id} {...el}/>
            )
        })
        return(
            <Form> 
                <FormElement>
                    <p><strong>{this.state.bmiProps.observationName} Form</strong></p>
                    {formBmi}
                    {this.state.bmiIndex ? <p>BMI: <span style={{fontSize:"16px",}}><strong>{this.state.bmiIndex + " kg/m2" }</strong></span></p> : null}
                    <Button disabled={this.state.bmiPropsDisable} onClick={() => this.buttonOnClick("bmiProps")}/>
                </FormElement>
                <FormElement>
                    <p><strong>{this.state.headProps.observationName} Form</strong></p>
                    {formHead}
                    <Button disabled={this.state.headPropsDisable} onClick={() => this.buttonOnClick("headProps")}/>
                </FormElement>
            </Form>
        )
    }
}

OnlineSubmit.propTypes = {
    bmi:PropTypes.object,
    head:PropTypes.object
}

export default OnlineSubmit;