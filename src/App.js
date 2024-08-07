import { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BB86FC',
    },
    primary: {
      main: '#03DAC6',
    },
    secondary: {
      main: '#BB86FC',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#000000',
      secondary: '#6200EE',
    },
    primary: {
      main: '#03DAC6',
    },
    secondary: {
      main: '#6200EE',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#F5F5F5',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
        },
      },
    },
  },
});

function App() {
  const [click, setClick] = useState(true);
  const [joke, setJoke] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);

  async function getJoke() {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
      setJoke(response.data);
      console.log("API response:", response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getJoke();
  }, [click]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Joke joke={joke} setClick={setClick} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
}

export default App;
