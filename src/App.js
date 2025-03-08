import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola, Mundo!</h1>
        <p>Este es mi primer proyecto en React.</p>
      </header>
    </div>
  );
}

export default App;*/
