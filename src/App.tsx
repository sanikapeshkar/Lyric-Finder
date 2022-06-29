import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchsong from "./component/Searchsong";
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            {/* Hero unit */}
            <Route path="/" element={<Searchsong />} />
          </Routes>
          {/* Footer */}
        </Router>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}

export default App;
