import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
// import {baseTheme} from '@chakra-ui/theme'
import Practice from "./Components/Practice";

// const { Button } = baseTheme.components

// export const  theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// })

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Practice />
    </ChakraProvider>
  );
}

export default App;
