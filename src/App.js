import HomepageComponent from './pages/homepage/HomepageComponent';
import Header from './components/header/Header';
import Shop from './pages/shop/Shop'
import React from 'react';

import {Switch, Route} from 'react-router-dom';
import './App.css';
import SignUpOut from './pages/signIn-signOut/SignUpOut';

import {auth} from './firebase/firebase-utils';

class App extends React.Component {

  constructor(){
    super()
    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser: user});
      })  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 
  render(){
    return(
      <div>
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomepageComponent}/>
            <Route exact path='/shop' component={Shop}/>
            <Route exact path='/account' component={SignUpOut}/>
        </Switch>
      </div>
      )
  }
}

export default App;
