/* New API Key - 663e7945200645c5ad4d0269025bbb8c */
import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import { BrowserRouter as Router,
        Route,
      Routes } from 'react-router-dom'; 

const App = () => {
    return (
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" category="general" />}/>
          <Route exact path="/technology" element={<News key="technology" category="technology" />} />
          <Route exact path="/science" element={<News key="science" category="science" />} />
          <Route exact path="/health" element={<News key="health" category="health" />} />
          <Route exact path="/business" element={<News key="business" category="business" />} />
          <Route exact path="/sports" element={<News key="sports" category="sports" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
        </Routes>
      </Router>
      
    )
}

export default App;
