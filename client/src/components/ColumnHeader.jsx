import React from 'react';
import AddActivity from './AddActivity.jsx';

function ColumnHeader({ todoList, setTodoList, doingList, setDoingList, doneList, setDoneList }) {
  return (
    <div className="main-container-header">
      <div>
        <AddActivity
          todoList={todoList}
          doingList={doingList}
          doneList={doneList}
          setTodoList={setTodoList}
          setDoingList={setDoingList}
          setDoneList={setDoneList}
        />
      </div>
      <div>
        Information About this App
      </div>
      <div>
        Demo Video
      </div>
    </div>
  );
}

export default ColumnHeader;
