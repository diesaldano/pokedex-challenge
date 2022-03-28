import React from 'react'
import CardList from '../CardList';
import Details from '../Details'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function AppUI(){
  
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/pokemon/:name" element={<Details />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default AppUI