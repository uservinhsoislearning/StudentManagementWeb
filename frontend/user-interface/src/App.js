import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App Container">
        <h3 className="d-flex justify-content-center m-3">
          React JS FrontEnd
        </h3>

        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
          <ul className='navbar-nav'>
            <li className='nav-item- m-1'>
              <NavLink className='btn btn-primary bth-outline-primary' to='/home'> {/*A button, the color is customized by bootstrap.css*/}
                Home
              </NavLink>  
            </li>
            <li className='nav-item- m-1'>
              <NavLink className='btn btn-primary bth-outline-primary' to='/department'>
                Department
              </NavLink>  
            </li>
            <li className='nav-item- m-1'>
              <NavLink className='btn btn-primary bth-outline-primary' to='/employee'>
                Employee
              </NavLink>  
            </li>   
          </ul>
        </nav>

        <Routes>
          <Route path='/home' Component={Home}/>
          <Route path='/department' Component={Department}/>
          <Route path='/employee' Component={Employee}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
