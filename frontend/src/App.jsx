
// import './App.css'
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes, Route} from 'react-router-dom';
import Register from "./pages/Register";
import CourseDetailPage from "./pages/CourseDetailPage";
// import CourseDetail from "./pages/CoursePage";
import CoursePage from "./pages/CoursePage";
import PrivateRoute from "./components/PrivateRoute";
import LearningPage from "./pages/LearningPage";

function App() {
  
  return (
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CoursePage />}  />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route element={<PrivateRoute/>} >
        <Route path="/learning" element={<LearningPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
