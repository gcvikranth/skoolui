import React, { Component } from 'react';
import './App.css';
import SchoolApp from './component/SchoolApp';
import Menu from './sidebar'
class App extends Component {
  componentDidMount(){
    document.title = "Kool after sKool"
    
  }


  render() {
    return (
      <div className="container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
            <SchoolApp />

        </main>
      </div>
    );
  }
}

export default App;
