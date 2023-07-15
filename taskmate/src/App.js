import './App.css';
import FirstPage from './Interfaces/FirstPage';
//import ProviderType from "./component/ProviderTypePage/ProviderType";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F2EbEd'
    },
    secondary: {
      main: '#A06A85'
    },
    info: {
      main: '#AF7FA1'
    },
    success: {
      main: '#916079'
    }

  }
})


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <FirstPage/>

      </ThemeProvider>
     
    </div>
  );
}

export default App;
