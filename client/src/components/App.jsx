import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todo from './Todo.jsx';
import Doing from './Doing.jsx';
import Done from './Done.jsx';
import ColumnHeader from './ColumnHeader.jsx';

function App() {
  const [todoList, setTodoList] = useState(['first', 'second', 'third']);
  const [doingList, setDoingList] = useState(['1', '2', '3']);
  const [doneList, setDoneList] = useState(['this', 'is', 'message']);

  useEffect(() => {
  }, []);

  return (
    <div className="body-container">
      <div className="header">
        My Daily Scrum Board
      </div>
      <div className="main-container">
        <ColumnHeader
          setTodoList={setTodoList}
          setDoingList={setDoingList}
          setDoneList={setDoneList}
        />
        <div className="column-container">
          <Todo todoList={todoList} />
          <Doing doingList={doingList} />
          <Done doneList={doneList} />
        </div>
      </div>
    </div>
  );
}

export default App;
