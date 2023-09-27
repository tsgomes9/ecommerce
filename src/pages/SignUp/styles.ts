import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const SideImg = styled.div`
  width: 50%;
  padding: 2rem;
  @media screen and (max-width: 850px) {
    display: none;
  }
`

export const LoginFormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0;
`
export const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
