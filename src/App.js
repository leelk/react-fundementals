import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Contact from "./components/Contact";
import TableOne from "./components/Table";

function App() {
  return (
    <div className="App">
        <Home/>
        <Contact/>
      <Greet/>
        <Welcome/>
        <TableOne/>

    </div>
  );
}

export default App;
