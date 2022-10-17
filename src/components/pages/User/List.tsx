import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { Page } from 'modules/app'
import { useUser, UserList } from 'modules/user'
import { User } from 'modules/api'

const List = () => {
  const { users } = useUser()
  const history = useHistory()
  const match = useRouteMatch()

  const handleClickNewUser = () => {
    history.push(match.url + '/new')
  }

  const handleClickUserDetails = (user: User): void => {
    history.push(`${match.url}/${user.id}/view`)
  }

  const handleClickUserDelete = (user: User): void => {
    history.push(`${match.url}/${user.id}/remove`)
  }

  return (
    <Page title="User list">
      <Box marginBottom={4}>
        <UserList
          onClickUserDelete={handleClickUserDelete}
          onClickUserDetails={handleClickUserDetails}
          items={users}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleClickNewUser}>
        Add new user
      </Button>
    </Page>
  )
}

export default List
