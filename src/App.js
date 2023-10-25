import logo from './logo.svg';
import './App.css';
import Vending from "./pages/Vending";
import {Route, Routes} from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<Vending/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    </div>
  );
}

export default App;
