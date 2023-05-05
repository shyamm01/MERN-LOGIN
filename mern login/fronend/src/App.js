import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/usermaster/Login';
import Dashboard from './components/usermaster/Dashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
