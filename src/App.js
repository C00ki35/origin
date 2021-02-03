import './App.css';
import HomepageComponent from './pages/homepage/HomepageComponent';
import Shop from './pages/shop/Shop'
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomepageComponent}/>
          <Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
