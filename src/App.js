import HomepageComponent from './pages/homepage/HomepageComponent';
import Header from './components/header/Header';
import Shop from './pages/shop/Shop'
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={HomepageComponent}/>
          <Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
