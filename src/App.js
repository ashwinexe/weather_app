import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Ashwin Kumar Uppala
      </footer>
    </div>
  );
}

export default App;
