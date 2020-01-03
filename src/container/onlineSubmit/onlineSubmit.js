import React from 'react'
import  {bmiReferenceProps,headCircumferenceReferenceProps} from '../../assest/exampleData/exampleData'
import InputElement from '../../component/Input/Input'
import Button from '../../component/Button/Button'

class OnlineSubmit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            bmiProps:bmiReferenceProps,
            headProps:headCircumferenceReferenceProps,
            bmiPropsDisable:true,
            headPropsDisable:true
        }
    }

    buttonOnClick = (type) => {
        const formValues = this.state[type].dataElements.map((el) => {return {[el.id]:el.value}})
        const result = Object.assign(...formValues)
        console.log(result)
    }


    checkValidity = (element) => {
        let valid= true
        if(element.bounds){
            valid = element.value < element.bounds.upperLimit && valid
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
                    valid:this.checkValidity(el)
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
            <div> 
                <div>
                    {formBmi}
                    <Button disabled={this.state.bmiPropsDisable} onClick={() => this.buttonOnClick("bmiProps")}/>
                </div>
                <div>
                    {formHead}
                    <Button disabled={this.state.headPropsDisable} onClick={() => this.buttonOnClick("headProps")}/>
                </div>
            </div>
        )
    }
}

export default OnlineSubmit;