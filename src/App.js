import logo from "./logo.svg";
import "./App.css";
import { Auth } from "./components/auth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="authCl">Firebase Auth App</h3>
        <div>
          <Auth />
        </div>
      </header>
    </div>
  );
}

export default App;
