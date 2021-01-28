import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import useToggle from "./hooks/useToggleLogo";

function App() {
  const [logoVisible, toggleLogo] = useToggle();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {logoVisible && <Header />}
        <input type="checkbox" onChange={toggleLogo} checked={logoVisible} />
      </header>
    </div>
  );
}

export default App;
