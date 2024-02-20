import './css/App.css';
import TaskButton from './components/Taskbutton';
import React from 'react';




function App() {
  return (

    <div className='content'>
        <TaskButton taskType = "Worklog" taskName = "Add Work Log"/>
        <TaskButton taskType = "todo"    taskName = "todo"/>
        <TaskButton taskType = "todo"    taskName = "todo"/>
    </div>
  );
}




export default App;
