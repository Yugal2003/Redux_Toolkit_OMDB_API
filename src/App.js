import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { useEffect, useRef, useState } from 'react';

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        // Always show header near the top
        setIsHeaderVisible(true);
      } else {
        // Determine scroll direction
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down: hide header
          setIsHeaderVisible(false);
        } else {
          // Scrolling up: show header
          setIsHeaderVisible(true);
        }
      }

      // Update previous scroll position
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header isHeaderVisible={isHeaderVisible}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
            <Route element={PageNotFound}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;