
import './App.css'
import Cart from './Pages/Cart';
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Order from './Pages/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <ToastContainer/>
  <Router>
    <Routes>

      <Route path="/"  element={<Home/>} />
      <Route path="/allProducts"  element={<Home/>} />
      <Route path="/cart"  element={<Cart/>} />
      <Route path="/order"  element={<Order/>} />



      <Route path="/*" element={<p>no found</p> }/>
    </Routes>
      {/* Other routes */}
  </Router>
    </>
  )
}

export default App
