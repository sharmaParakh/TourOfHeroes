import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import HomePage from './Home/HomePage'
import Heroes from './Heroes/Heroes'
import Bollywood from './Heroes/Bollywood';
import Hollywood from './Heroes/Hollywood';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/Dashboard' element={<Dashboard />}></Route>
          <Route exact path='/Heroes' element={<Heroes />}></Route>
          <Route exact path='/Bollywood' element={<Bollywood />}></Route>
          <Route exact path='/Hollywood' element={<Hollywood />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
