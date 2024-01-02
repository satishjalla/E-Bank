import {Router, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Router exact path="/" component={Home} />
      <Router exact path="/ebank/login" component={Login} />
      <NotFound />
    </Switch>
  </div>
)

export default App
