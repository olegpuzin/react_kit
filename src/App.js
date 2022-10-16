import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Count from './pages/Count';
import Modal from "./pages/Modal";
import Quiz from "./pages/Quiz";
import GuestList from "./pages/GuestList";
import CurrencyConvertor from "./pages/CurrencyConvertor";
import PhotoGallery from "./pages/PhotoGallery";
import './App.scss';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/count' element={<Count />}/>
          <Route path='/modal' element={<Modal />}/>
          <Route path='/quiz' element={<Quiz />}/>
          <Route path='/users' element={<GuestList />}/>
          <Route path='/convertor' element={<CurrencyConvertor />}/>
          <Route path='/gallery' element={<PhotoGallery />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
