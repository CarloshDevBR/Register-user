import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Users from './Pages/Users'

function Routes() {
  return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </Router>
    )
}

export default Routes