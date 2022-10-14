import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Users } from '../pages'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Users.List}>
        <Redirect to="/users" />
      </Route>

      <Route path="/users" component={Users.List} />
    </Switch>
  )
}

export default AppRoutes
