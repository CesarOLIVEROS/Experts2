import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import SearchResults from "./screens/SearchResults";
import NotFound from './screens/NotFound';
import Register from './screens/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/search-results' element={<SearchResults/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
    
    </BrowserRouter>);
}

export default App;
