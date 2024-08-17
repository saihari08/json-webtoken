import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
   <BrowserRouter>
   <Routes> 
    <Route path="/" element={<Signin/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/tasks" element={<Tasks/>}></Route>
    <Route path="/leaves" element={<Leaves/>}></Route> 
    <Route path="*" element={<PageNotFound/>}></Route> 
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;

