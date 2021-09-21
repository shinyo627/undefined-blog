import {
  BrowserRouter as Browser,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Browser>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/admin' render={(props) => } /> */}
        </Switch>
      </div>
    </Browser>
  );
}

export default App;
