import React from 'react';
import WorkLogForm from './Worklog';
import '../css/task.css'


class TaskButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false  // Initially, the WorkLogForm is not open
        };
    }

    openTask = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen })); 
    }

    


    render() {
        let form = null;
        if(this.props.taskType === "Worklog"){
            form = <WorkLogForm />
        }
        else{
            form = <h1>This will be another form</h1>
        }

        return (
            <div className = "taskbox">
                <button  onClick={this.openTask}>{this.props.taskName}</button>
                {this.state.isOpen && form}
            </div>
        );
    }
}

export default TaskButton;
