import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';
import store from './store'
import { Home } from './pages'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
