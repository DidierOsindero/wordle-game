import "./App.css";
import { Wordle } from "./components/Wordle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Wordle />
      <ToastContainer />
    </div>
  );
}

export default App;
