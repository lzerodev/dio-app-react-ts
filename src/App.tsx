import { Layout } from "./components/Layout/Layout";
import styled from 'styled-components'

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
`

function App() {
  return (
    <Layout>
      <Box>
        <h1>Faça o login</h1>
      </Box>
      <label htmlFor='emailInput'>
        Email
      </label>
      <input id='emailInput' type='email'/>

      <label htmlFor='passwordInput'>
        Senha
      </label>
      <input id='passwordInput' type='password' />
    </Layout>
  );
}

export default App;
