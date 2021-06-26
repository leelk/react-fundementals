import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Home/>
        <Contact/>
      <Greet name="Leel"/>
      <Greet name="Sahan"/>
      <Greet name="Heshan"/>
        <Welcome/>

    </div>
  );
}

export default App;
