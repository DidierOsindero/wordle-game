import "./App.css";
import { Wordle } from "./components/Wordle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Wordle />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
