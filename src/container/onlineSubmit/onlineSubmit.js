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
 

        return(
            <div>
                <InputElement {...this.state.bmiProps.dataElements[1]}/>
                <Button onClick={this.buttonOnClick}/>
            </div>
        )
    }

}

export default OnlineSubmit;