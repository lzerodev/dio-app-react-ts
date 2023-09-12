import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { Layout } from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import ContaInfo from "./pages/ContaInfo";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path="/infoconta" element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
