import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from '../../redux/store'
import Home from '../Home'
import Detail from '../Detail'
import './style.scss'

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/detail/:id?' component={Detail} />
      </div>
    </Router>
  </Provider>
)

export default App
