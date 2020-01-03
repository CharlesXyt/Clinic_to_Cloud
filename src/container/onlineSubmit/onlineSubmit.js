import React from 'react'
import  {bmiReferenceProps,headCircumferenceReferenceProps} from '../../assest/exampleData/exampleData'

class OnlineSubmit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            bmiProps:bmiReferenceProps,
            headProps:headCircumferenceReferenceProps
        }
    }
    render(){
        return(
            <div></div>
        )
    }

}