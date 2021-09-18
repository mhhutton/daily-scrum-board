import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todo from './Todo.jsx';
import Doing from './Doing.jsx';
import Done from './Done.jsx';
import ColumnHeader from './ColumnHeader.jsx';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div className="body-container">
      <div className="header">
        My Daily Scrum Board
      </div>
      <div className="main-container">
        <ColumnHeader />
        <div className="column-container">
          <Todo />
          <Doing />
          <Done />
        </div>
      </div>
    </div>
  );
}

export default App;
