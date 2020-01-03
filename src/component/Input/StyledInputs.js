import styled from 'styled-components'

const StyledInput = styled.input`
    display:inline-block;
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 10px 10px;
    font-size: 24px;
    width:70%
    :focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
    ::placeholder{
        font-size:16px;
    }
`

const StyledLabel = styled.label`
    padding-left:3px;
    font-size:16px;
    color: black; 
    line-height: 30px; 
    display: block;
`

const StyledSelect = styled.select`
    width:80%; 
    height:40px; 
    line-height:40px; 
    filter:alpha(opacity=0);
    cursor:pointer; 
    font-size: 16px;
`

const ErrorMessage = styled.p`
    font-size:10px;
    color:red
`

export {
    StyledInput,
    StyledSelect,
    StyledLabel,
    ErrorMessage
}