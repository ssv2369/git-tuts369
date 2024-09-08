import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  padding-bottom: 35px;
`

export const Name = styled.h1`
  color: #2563eb;
  font-size: 45px;
  font-family: 'Roboto';
`

export const Topic = styled.p`
  color: #334155;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const Image = styled.img`
  height: 350px;
  width: 90%;
  margin-top: 30px;
`

export const HomeTitle = styled.h1`
  color: #334155;
  font-size: 50px;
  font-family: 'Roboto';
`

export const HomeCaption = styled.p`
  color: #475569;
  font-size: 25px;
  font-family: 'Roboto';
`

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
