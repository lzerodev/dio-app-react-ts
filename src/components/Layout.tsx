import { Footer } from "./Footer"
import { Header } from "./Header"
import {
  Box
} from "@chakra-ui/react";

export const Layout = ({ children } : any) => {
  return(
       <Box 
       maxWidth="100vh"
       minHeight="100vh"
       backgroundColor="#7f28b5"
       shadow="lg"
       >
      <Header />
      { children }
      <Footer />
      </Box>
   
  )
}

