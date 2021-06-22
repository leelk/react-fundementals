import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Home/>
      <Greet/>
        <Welcome/>
    </div>
  );
}

export default App;
