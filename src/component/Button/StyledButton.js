import styled from 'styled-components'

const StyledButton = styled.button`
    cursor:pointer;
    border-radius:3px;
    color: white;
    width:50px;
    height:30px;
    font-size:10px;
    background-color:green;
    margin-top:20px
    :disabled{
        color:#ccc;
        cursor:not-allowed;
    }
`

export default StyledButton;