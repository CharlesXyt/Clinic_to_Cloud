import styled from 'styled-components'

const StyledButton = styled.button`
    cursor:pointer;
    border: 1px solid #4daff9;
    border-radius:3px;
    width: 50%; 
    height:40px;
    padding: 5px 5px; 
    font-size:16px;
    margin:20px auto;
    margin-bottom:0;
    background: #fff; 
    color: #4daff9; 

    :focus{
        color: #fff;
        background: #0a90f5;
    }
    :disabled{
        color:#ccc;
        cursor:not-allowed;
    }


    

`

export default StyledButton;