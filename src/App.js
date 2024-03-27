
import './App.css';
import ListTask from './component/ListTask';
import Addtask from './component/Addtask';
import Filter from './component/filterTask';
import { useState } from 'react';
import { TaskData } from './data';

function App() {
  
  return (
    <div className="App">
      <Filter/>
      <Addtask/>
      <ListTask/>
    </div>
  );
}

export default App;
