import './App.css';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;