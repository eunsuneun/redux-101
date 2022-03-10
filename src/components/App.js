import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
};

export default App;