import React from 'react'
import  {bmiReferenceProps,headCircumferenceReferenceProps} from '../../assest/exampleData/exampleData'
import InputElement from '../../component/Input/Input'
import Button from '../../component/Button/Button'

class OnlineSubmit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            bmiProps:bmiReferenceProps,
            headProps:headCircumferenceReferenceProps
        }
    }

    buttonOnClick = () => {
        alert("submit")
    }

    render(){
 
        const formBmi = this.state.bmiProps.dataElements.map((el) => {
            return (
                <InputElement key={el.id} {...el}/>
            )
        })
        const formHead = this.state.headProps.dataElements.map((el) => {
            return (
                <InputElement key={el.id} {...el}/>
            )
        })
        return(
            <div>
                {formBmi}
                {formHead}
                <Button onClick={this.buttonOnClick}/>
            </div>
        )
    }

}

export default OnlineSubmit;