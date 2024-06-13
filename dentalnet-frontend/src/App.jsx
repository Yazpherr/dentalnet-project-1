// import './App.css'
// import { Home } from "./views/Home";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // //Diseño
// // import { ConfigProvider } from "antd";
// // import esES from "antd/locale/es_ES";

// // //AuthProvider
// // import { AuthProvider } from "./context/AuthContext";

// // import React from 'react';


// function App() {
//   return (
//      <div>
//       <h1>Hola</h1>
//       <Home/>
//      </div>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';  // Ajusta la ruta si es necesario

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Añade otras rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default App;
