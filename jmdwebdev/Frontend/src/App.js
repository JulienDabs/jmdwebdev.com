import React from 'react';
import './App.css';
import { DarkModeProvider } from './Components/DarkMode/DarkModeContext';
import LanguageSelector from './Components/LanguageSelector/LanguageSelector';


function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <LanguageSelector />
      </DarkModeProvider>
      
    </div>
  );
}

export default App;
