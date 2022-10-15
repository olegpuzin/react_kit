import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Count from './pages/Count/Count';
import Modal from "./pages/Modal/Modal";
import Quiz from "./pages/Quiz/Quiz";
import GuestList from "./pages/GuestList/GuestList";
import CurrencyConvertor from "./pages/CurrencyConvertor/CurrencyConvertor";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import './App.scss';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/count' element={<Count />}/>
        <Route path='/modal' element={<Modal />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/users' element={<GuestList />}/>
        <Route path='/convertor' element={<CurrencyConvertor />}/>
        <Route path='/gallery' element={<PhotoGallery />}/>
      </Routes>
    </div>
  );
}

export default App;
