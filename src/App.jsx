import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact.jsx";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";

const LazyProject = lazy(() => import("./components/Projects/Projects.jsx"));
const LazyHome = lazy(() => import("./components/Home/Home"));

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-900 via-orange-200 to-slate-900">
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>

      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
};

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<LazyHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<LazyProject />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}

export default App;
