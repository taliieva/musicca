import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.tsx';
import Layout from './pages/index.tsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}   
export default App;
