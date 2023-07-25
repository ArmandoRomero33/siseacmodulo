import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario de Empleados</h1>
      </header>
      <main>
        <EmployeeForm />
      </main>
    </div>
  );
}

export default App;
