
// import './App.css'
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes, Route} from 'react-router-dom';
import Register from "./pages/Register";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseDetail from "./pages/CoursePage";

function App() {
  
  return (
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<h1 className="text-center mt-5">Courses Page</h1> }  />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
