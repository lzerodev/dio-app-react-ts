import { login } from './services/login'
import { Cards } from './components/Card/Cards'
import { Layout } from './components/Layout/Layout'


function App() {
  return (
    <>
    <Layout>
      <Cards
        id={1}
        title={"Faça o login"}
        event={login}
      />
    </Layout>
    </>
  );
  
}

export default App;
