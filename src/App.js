import React from 'react'
import {HashRouter,BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';

const App = () =>{
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </HashRouter>
  )
}
export default App;
