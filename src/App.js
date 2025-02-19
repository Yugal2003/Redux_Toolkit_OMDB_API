import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
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