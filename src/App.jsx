import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home2 from './pages/home2'
import Rsvp from './pages/rsvp'
import OnLoad from './pages/componets/onLoad';
import Rho from './pages/componets/rho';
import Benbeejammin from './pages/componets/Benbeejammin';
import Music from './pages/componets/Music';
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
            <Route path="/" element={<Home2 />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/rsvp' element={<Rsvp/>} />
            <Route path= '/Rho' element= {<Rho/>} />
            <Route path= '/Music' element= {<Music/>} />
            <Route path= '/Benbeejammin' element= {<Benbeejammin/>} />
          </Routes> 
       </RouteLoaderWrapper>
      
    </Router>
  )
}

export default App
