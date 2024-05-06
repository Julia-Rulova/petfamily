import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
