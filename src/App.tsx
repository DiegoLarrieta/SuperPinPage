import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"; // Global CSS file

import AppRoutes from "./Routes/AppRoutes"; // Import the AppRoutes component

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AppRoutes /> {/* Use AppRoutes to handle different page routes */}
      </div>
    </Router>
  );
};

export default App;
