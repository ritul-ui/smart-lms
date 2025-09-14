
// import './App.css'
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes, Route} from 'react-router-dom';
import Register from "./pages/Register";

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/courses" element={<CoursesPage />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
