import React from "react";
import ReactDOM from "react-dom/client";
import { App, RedirectManager } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const Spotify = () => {
  return <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1BxdlcpJbauNh1gP3PR1FI?utm_source=generator" width="40%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> 
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FAD7EA",
    },
    secondary: {
      main: "#451A3D",
    },
    background: {
      default: "#270B23",
    },
  },
  shape: {
    borderRadius: 6,
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  typography: {
    fontFamily: "'Outfit', 'Roboto', sans-serif;",
    fontSize: 14,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/:target" element={<RedirectManager />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
