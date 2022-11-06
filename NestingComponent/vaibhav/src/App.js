
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import Navbar from './Component/Nevbar'
import Contect from './Component/Contect'
import Company from './Component/Company'
import Channel from './Component/Channel'
import Other  from './Component/Other'
import './App.css';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contect/" element={<Contect/>}>
      <Route path="Company" element={<Company/>}/>
      <Route path="Channel" element={<Channel/>}/>
      <Route path="Other" element={<Other/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
