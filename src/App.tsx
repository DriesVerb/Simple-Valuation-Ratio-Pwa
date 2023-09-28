import { Route, Switch } from 'wouter'
import './App.css'
import Home from './views/home/home'
import About from './views/about/about'

function App() {
  return (
    <>
      <div>TEST</div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  )
}

export default App
