
import './App.css';
import FormUser from './components/FormUser.js';
import Main from './components/Main';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    secondary: {
      main: "#8561c5",
    },
  },
})
function App() {
  return (<ThemeProvider theme={theme}>
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-bg-app">

      <Main />
    </div>

  </ThemeProvider>
  );
}

export default App;
