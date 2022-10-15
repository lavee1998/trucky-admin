import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Users } from '../pages'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/users" />
      </Route>
      <Route path="/users" component={Users}></Route>
    </Switch>
  )
}

export default AppRoutes
