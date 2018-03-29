import React, { Component } from 'react';
import axios from 'axios';
import Schedule from './Schedule.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      schedule: [],
      value: 0,
    }
    // this.getSchedule = this.getSchedule.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  // getSchedule(week) {
  //   axios.get(`https://api.sportradar.us/nfl-ot2/games/2017/REG/${week}/schedule.json?api_key=uz2cgm732gvsdqrecvkzjepm`)
  //     .then(data => {
  //       this.setState({ schedule: data });
  //     })
  //     .catch(err => console.log(err));
  // }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getSchedule(this.state.value);
  }

  goHome() {
    this.setState({ schedule: [] });
  }



  render() {
    if(this.state.schedule.length === 0) {
      return (
        <div className="main">
          <div className="title">Mix & Match</div>
          
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">Home</button>
            <button type="button" class="btn btn-default">About Us</button>
            <button type="button" class="btn btn-default">Contact Us</button>
        </div>

        </div>  
      )
    } else if (this.state.schedule.length === undefined) {
      return (
        <div className="main">
          <div className="title">Mix & Match</div>
          <Schedule schedule={this.state.schedule} home={this.goHome}/>
        </div>
      )
    }  
  }  
}

export default App;