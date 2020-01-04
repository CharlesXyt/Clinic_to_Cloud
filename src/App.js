import React from 'react';
import  {bmiReferenceProps,headCircumferenceReferenceProps} from './assest/exampleData/exampleData'
import Form from './container/onlineSubmit/onlineSubmit'

function App() {
  return (
    <Form bmi={bmiReferenceProps} head={headCircumferenceReferenceProps}/>
  );
}

export default App;
