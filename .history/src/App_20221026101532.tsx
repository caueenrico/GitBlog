import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}


