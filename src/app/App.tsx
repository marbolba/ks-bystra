import LightTheme from "@/theme";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Home from "@/pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <LightTheme>
        <Home />
      </LightTheme>
    </>
  );
}

export default App;
