import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Home from "@/pages/Home/Home";
import ThemeProvider from "@/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
