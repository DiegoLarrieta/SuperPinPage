import React from "react";
import Header from "./Components/Header/Header";
import "./App.css"; // Archivo CSS para los estilos globales

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;