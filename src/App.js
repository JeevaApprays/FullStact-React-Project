import logo from './logo.svg';
import './App.css';
import './Routers/BasicRouter'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login'

const App=()=> {
  return (
<div>
<BrowserRouter>
<Routes>
<Route path="/" element={<Register/>}/>
<Route path="/login" element={<Login/>} />
</Routes>

</BrowserRouter>

</div>
  );
}

export default App;
