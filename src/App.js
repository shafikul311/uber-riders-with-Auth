
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RideNow from './components/RideNow/RideNow';
import NoMatch from './components/NoMatch/NoMatch';
import Navigation from './components/Home/Navigation';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {

  const [loggedInUser , setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser , setLoggedInUser]} >
        <p>Name :{loggedInUser.name}</p>
      <div className="App">
      <Router>

        <h1> UBER RIDERS</h1>
        <Navigation></Navigation>
        <hr/>
        <Switch>
              
            <Route path="/home">
              <Home/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <PrivateRoute path="/rideNow/:id">
              <RideNow/>
            </PrivateRoute>
            
            <Route exact path="/">
                <Home />
              </Route>

            {/* <Route path="*">
                <NoMatch />
              </Route> */}

        </Switch>
        
      </Router>
      </div>
      </UserContext.Provider>


     
    
  );
}

export default App;
