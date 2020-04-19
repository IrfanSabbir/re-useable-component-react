import React from 'react';
import Layout from './containers/Layout/Layout'
import {Redirect, Switch, Route, withRouter} from 'react-router-dom'

import classes from './App.css';



function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          
          <Route path="/bookings"  component={null}/>
          <Route path="/" exact component={null}/>
        </Switch>

        
      </Layout>
      <div>
      Learn React
      </div>
     
      
       
     
    </div>
  );
}

export default App;
