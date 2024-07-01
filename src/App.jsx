import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Order from "./Pages/Order/Order";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

function App() {
  
  return <div>
    <ToastContainer/>
    <Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/> 
      <Routes>
        <Route path="/add" element={<Add  />}  />
        <Route path="/list" element={<List  />} />
        <Route path="/order" element={<Order  />} />
      </Routes>

    </div>

  </div>;
}

export default App;
