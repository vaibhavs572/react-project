import React from 'react';
import Header from './components/header';
import Sidebar from '../src/components/sidebar';
import Homepage from './components/homepage';
import Locations from './components/locations';
import Resident from './components/resident';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <React.Fragment>
    <Sidebar/>
      <div className="content">
        <BrowserRouter>
        
        <Switch>
          <Route
            exact path="/"
            component={Homepage}
          />
        <Route
          path="/locations"
          component={Locations}
          />
        <Route
          path="/resident.js"
          component={Resident} 
        />
        </Switch>
        </BrowserRouter>
            </div> 
    </React.Fragment>
    </div>
  );
}

export default App;
                    