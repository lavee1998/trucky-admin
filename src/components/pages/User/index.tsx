import React from 'react'
export { default as Edit } from './View'
export { default as List } from './List'
export { default as Remove } from './Remove'
import { Route, useRouteMatch } from 'react-router-dom'
import New from './New'
import Remove from './Remove'
import List from './List'
import View from './View'

const User = () => {
  const match = useRouteMatch()

  return (
    <>
      <Route
        path={[`${match.url}`, `${match.url}/:id/remove`, `${match.url}/new`]}
        exact
        component={List}
      />
      <Route path={`${match.url}/new`} exact component={New} />
      <Route path={`${match.url}/:id/view`} exact component={View} />
      <Route path={`${match.url}/:id/remove`} exact component={Remove} />
    </>
  )
}

export default User
