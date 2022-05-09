import React, { useState, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import SearchBar from './components/SearchBar';
import LeftPanel from './components/LeftPanel';
import MyDay from './components/Task_panels/MyDay';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="grid-two-rows">
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className='grid-three-columns user-interface'>
            <div className="left-panel">
              <LeftPanel />
            </div>
            <div className="task-form">
              <Routes>
                <Route
                  path='myday' element={<MyDay title={'My day'} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

