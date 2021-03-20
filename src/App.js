
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

function App() {
  return (
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

            <Route path="/rideNow/:id">
              <RideNow/>
            </Route>
            
            <Route exact path="/">
                <Home />
              </Route>

            {/* <Route path="*">
                <NoMatch />
              </Route> */}

        </Switch>
        
      </Router>


     
    </div>
  );
}

export default App;
