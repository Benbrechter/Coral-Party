import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from './pages/home'
import Rsvp from './pages/rsvp'
import OnLoad from './pages/componets/onLoad';
import './App.css'

const useRouteLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust loading duration as needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on route change

  return isLoading;
};

const RouteLoaderWrapper = ({ children }) => {
  const isRouteLoading = useRouteLoading();

  // Use your existing OnLoad component for route loading
  if (isRouteLoading) {
    return <OnLoad />;
  }

  return children;
};

function App() {

  return (
    <Router>
       <RouteLoaderWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/rsvp' element={<Rsvp/>} />
          </Routes> 
       </RouteLoaderWrapper>
      
    </Router>
  )
}

export default App
