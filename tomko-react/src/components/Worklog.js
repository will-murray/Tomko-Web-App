import React from 'react';
import '../css/form.css'

class WorkLogForm extends React.Component {
    state = {
        ID: '',
        jobsite: '',
        hoursWorked: '',
        startTime: '',
        endTime: '',
        dateInput: '',
        sitetime: '',
        traveltime: '',
        shoptime: '',
        errtime: ''
    };
  
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
  
    fillDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const date =`${year}-${month}-${day}`;
      this.setState({dateInput: date});
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    submitform = () =>{


        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a letiable
        let raw = JSON.stringify({
                "ID": this.state.ID,
                "jobsite": this.state.jobsite,
                "hoursWorked": this.state.hoursWorked,
                "startTime": this.state.startTime,
                "endTime": this.state.endTime,
                "date" : this.state.dateInput,
                "siteTime" : this.state.sitetime,
                "travelTime" : this.state.traveltime,
                "shopTime" : this.state.shoptime,
                "errTime" : this.state.errtime,

        });
        console.log("raw = ", raw)
        //create a JSON object with parameters for API call and store in a letiable
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://sjvs67w880.execute-api.us-west-2.amazonaws.com/dev/insert_daylog", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => alert('error', error));
    
    }
  
  
    render() {
        return (
            <div className="formwrapper">
                {/* <div id="header">
                    <img src="../imgs/logo.png" width="20%" alt="Logo" />
                </div> */}
                <div className="formcontent">
                    <div className="formheader">
                        <h1>Work Log</h1>
                    </div>
  
                    <div>
                        <form className="formbox" onSubmit={this.handleSubmit}>
                            <div className="inputbox">
                                <label htmlFor="ID">ID:</label>
                                <input type="text" id="ID" name="ID" value={this.state.ID} onChange={this.handleChange} required />
                            </div>
  
                            <div className="inputbox">
                                <label htmlFor="jobsite">Job Site:</label>
                                <input type="text" id="jobsite" name="jobsite" value={this.state.jobsite} onChange={this.handleChange} required />
                            </div>
  
                            <div className="inputbox">
                                <label htmlFor="hoursWorked">Hours Worked:</label>
                                <input type="number" id="hoursWorked" name="hoursWorked" value={this.state.hoursWorked} onChange={this.handleChange} min="0" step="0.5" required />
                            </div>
  
                            <div className="inputbox">
                                <label htmlFor="startTime">Start Time:</label>
                                <input type="time" id="startTime" name="startTime" value={this.state.startTime} onChange={this.handleChange} required />
                            </div>
  
                            <div className="inputbox">
                                <label htmlFor="endTime">End Time:</label>
                                <input type="time" id="endTime" name="endTime" value={this.state.endTime} onChange={this.handleChange} required />
                            </div>
  
                            <div className="inputbox">
                                <label htmlFor="dateInput">Select Date:</label>
                                <input type="date" id="dateInput" value={this.state.dateInput} onChange={this.handleChange} />
                                <button id="fillDateBtn" onClick={this.fillDate}>Fill Today's Date</button>
                            </div>
  
                            <div className="inputbox">
                                <label htmlFor="sitetime">Site Time:</label>
                                <input type="number" id="sitetime" name="sitetime" value={this.state.sitetime} onChange={this.handleChange} />
                            </div>
                            
                            <div className="inputbox">
                                <label htmlFor="traveltime">Travel Time:</label>
                                <input type="number" id="traveltime" name="traveltime" value={this.state.traveltime} onChange={this.handleChange} />
                            </div>
                            
                            <div className="inputbox">
                                <label htmlFor="shoptime">Shop Time:</label>
                                <input type="number" id="shoptime" name="shoptime" value={this.state.shoptime} onChange={this.handleChange} />
                            </div>
                            
                            <div className="inputbox">
                                <label htmlFor="errtime">ERR Time:</label>
                                <input type="number" id="errtime" name="errtime" value={this.state.errtime} onChange={this.handleChange} />
                            </div>
                            
  
                            <div className="btnbox">
                                <button
                                    id="submit_btn"
                                    type="submit"
                                    onClick={this.submitform}
                                    onMouseOver={this.buttonMouseOver}
                                    onMouseOut={this.buttonMouseOut}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkLogForm;