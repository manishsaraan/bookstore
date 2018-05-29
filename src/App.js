import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <form className="form-wrapper">
            <input type="text" id="search" placeholder="Search for..." required/>
            <input type="submit" value="go" id="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
