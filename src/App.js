import './App.css';
import HomepageComponent from './pages/homepage/HomepageComponent';
import Test from './pages/items/Test'
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomepageComponent}/>
          <Route exact path='/shop/hats' component={Test}/>
      </Switch>
    </div>
  );
}

export default App;
