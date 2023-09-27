import { Button, TextField } from '@mui/material'
import SideImage from '../../assets/SignUp/SideImage.png'
import { Container, FormSignUp, LoginFormContainer, SideImg } from './styles'

export default function SignUp() {
  const handleSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Container>
      <SideImg>
        <img src={SideImage} style={{ width: '100%' }} />
      </SideImg>

      <LoginFormContainer>
        <h1>Create an Account</h1>
        <p style={{ margin: 0, padding: 0 }}>Enter your details bellow</p>
        <FormSignUp onSubmit={handleSubmit}>
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="E-mail" variant="standard" />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
          />
          <Button variant="contained" size="large">
            Create Account
          </Button>
        </FormSignUp>
        <p>Already have account? Log in </p>
      </LoginFormContainer>
    </Container>
  )
}
