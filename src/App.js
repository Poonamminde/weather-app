import Head from "./components/head";
import Aside from "./components/aside";
import Home from "./components/home";
import Recent from "./components/recent";
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <Head />
      <div className="weather-main-section">
        <Aside setPage={setPage} />
        {page === 0 ? <Home /> : <Recent />}
      </div>
    </div>
  );
}

export default App;
