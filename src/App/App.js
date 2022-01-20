import React from 'react';
import { ContextoProvider } from './Contexto';
import './App.css';
import { AppUI } from './AppUI/AppUI';

function App() {
  return (
    <ContextoProvider>
      <AppUI />
    </ContextoProvider>
  );
}

export default App;
