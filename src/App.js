import Head from "./components/head";
import Aside from "./components/aside";
import Home from "./components/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Head />
      <div className="weather-main-section">
        <Aside />
        <Home />
      </div>
    </div>
  );
}

export default App;
