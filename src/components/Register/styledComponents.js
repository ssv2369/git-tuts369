import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
`

export const RegisterImageContainer = styled.div`
  height: 400px;
  width: 50%;
`
export const RegisterImage = styled.img`
  height: 100%;
  width: 100%;
`
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  min-height: 400px;
`

export const FormTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #334155;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const InputElement = styled.input`
  width: 350px;
  border: 1px solid #cbd5e1;
  padding: 12px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
`

export const Label = styled.label`
  color: #7b8794;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  font-family: 'Roboto';
`

export const SelectElement = styled.select`
  width: 350px;
  border: 1px solid #cbd5e1;
  padding: 12px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
`

export const OptionElement = styled.option``

export const RegisterBtn = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 17px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 5px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
`
