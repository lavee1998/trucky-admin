import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Users } from '../pages'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/users" component={Users} />
      {/* <Route path={['/', '/users', '/users/:id/remove']} exact component={Users.List} /> */}
    </Switch>
  )
}

export default AppRoutes
