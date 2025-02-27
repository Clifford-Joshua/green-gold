import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/HomePage/Home";
import Submit from "./Pages/Submit/Submit";
import Login from "./Pages/Login Page/Login";
import Error from "./Pages/Error Page/Error";
import About from "./Pages/AboutUs Page/About";
import Course from "./Pages/Course Page/Course";
import Contact from "./Pages/Contact Us/Contact";
import SignUp from "./Pages/Sign Up Page/SignUp";
import Profile from "./Pages/Profile Page/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Utils/ProtectedRoute";
import Dashboard from "./Pages/DashBoard Page/DashBoardPage";
import SingleEvent from "./Pages/Single Events/SingleEvent";
import SingleCourse from "./Pages/Single Course/SingleCourse";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SharedComponent from "./Shared/Components/SharedComponent";
import ForgottenPassword from "./Pages/ForgottenPassword/ForgottenPassword";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SharedComponent />} path="/">
          <Route index element={<Home />} />
          <Route
            path="/course"
            element={
              <ProtectedRoute>
                <Course />
              </ProtectedRoute>
            }
          />
          <Route path="/about-us" element={<About />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/contact-us" element={<Contact />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/event/:eventId" element={<SingleEvent />} />
          <Route path="/course/:courseId" element={<SingleCourse />} />
        </Route>

        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form-submitted" element={<Submit />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
