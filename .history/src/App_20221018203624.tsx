import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./assets/styles/themes/default"

function App() {
  return (
   <ThemeProvider theme={defaultTheme}>

    </ThemeProvider>
  )
}

export default App
