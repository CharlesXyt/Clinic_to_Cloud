import styled from 'styled-components'


const Form = styled.div`
    display:flex;
    justify-content:space-around
    margin-top:30px;
`

const FormElement = styled.form`
    margin:20px auto;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 2% 3%;
    box-sizing: border-box;
    display:flex;
    width:30%;
    flex-flow:column nowrap;
    justify-content:flex-start;
`




export {Form,FormElement}