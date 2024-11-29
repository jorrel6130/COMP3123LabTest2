// Jorrel Tigbayan
// 101329925
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Result from './components/Result'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div classname="Home">
        <h1 classname="Home-header">ReactJS Weather App</h1>
        <h3>Jorrel Tigbayan</h3>
        <h4>101329925</h4>
      </div>
      <BrowserRouter>
        <nav>
          <NavLink to='/search'>Search</NavLink>
        </nav>
          <Routes>
            <Route path='/search' element= { <Search /> }/>
            <Route path='/result/:city' element= { <Result /> }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
