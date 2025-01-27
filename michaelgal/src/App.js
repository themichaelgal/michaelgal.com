import React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import UnderConstruction from "./UnderConstruction";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UnderConstruction />
    </ThemeProvider>
  );
}

export default App;
