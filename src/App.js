import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/index.tsx';
import Home from './pages/Home/page.tsx';

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
