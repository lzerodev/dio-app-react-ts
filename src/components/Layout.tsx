import { Footer } from "./Footer"
import { Header } from "./Header"
import {
  Container
} from "@chakra-ui/react";

export const Layout = ({ children } : any) => {
  return(
    <Container maxW="100%" maxH="100%" centerContent
    backgroundColor="#7f28b5"
    >
       
       
      <Header />
      { children }
      <Footer />
      </Container>
   
  )
}

