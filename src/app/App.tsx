import LightTheme from "@/theme/LightTheme";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Home from "@/pages/Home/Home";
import FontThemeProvider from "@/features/FontThemeProvider/FontThemeProvider";

function App() {
  return (
    <>
      <GlobalStyles />
      <LightTheme>
        <FontThemeProvider>
          <Home />
        </FontThemeProvider>
      </LightTheme>
    </>
  );
}

export default App;
