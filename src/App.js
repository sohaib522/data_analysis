import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import Barcharts from './Components/Barcharts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <HashRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/barcharts' element={<Barcharts/>} />
   </Routes>
   </HashRouter>
    </div>
  );
}

export default App;
