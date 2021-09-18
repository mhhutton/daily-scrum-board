import React from 'react';
import AddActivity from './AddActivity.jsx';

function ColumnHeader() {
  return (
    <div className="main-container-header">
      <div>
        <AddActivity />
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
