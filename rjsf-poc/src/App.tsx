import React from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicFormRJSF from './components/DynamicFormRJSF';
import { sampleSchema } from './components/DynamicFormConfig';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dynamic Form Renderer
      </header>
         <DynamicFormRJSF config={sampleSchema} />
    </div>
  );
}

export default App;
