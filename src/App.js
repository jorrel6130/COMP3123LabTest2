// Jorrel Tigbayan
// 101329925
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Result from './components/Result'
import Toronto from './components/Toronto'

function App() {
  return (
    <div className="App">
      <h1>ReactJS Weather App</h1>
      <h3>Jorrel Tigbayan</h3>
      <h4>101329925</h4>
      <BrowserRouter>
        <nav>
          <NavLink to='/search'> Search</NavLink>
          <NavLink to='/toronto'> Toronto</NavLink>
        </nav>
          <Routes>
            <Route path='/search' element= { <Search /> }/>
            <Route path='/result' element= { <Result /> }/>
            <Route path='/toronto' element= { <Toronto /> }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
