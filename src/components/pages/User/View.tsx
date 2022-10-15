import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import { Page } from 'modules/app'
import { useUser } from 'modules/user'

const View = () => {
  const { user } = useUser()

  if (!user) return null
  return (
    <Page title={user.firstName + ' ' + user.lastName}>
      <List>
        <ListItem>
          <ListItemText primary={'First name: ' + user.firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Last name: ' + user.lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Company id: ' + user.companyId} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Email: ' + user.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Created at: ' + user.createdAt} />
        </ListItem>
        <ListItem>
          <ListItemText primary={'Updated at: ' + user.updatedAt} />
        </ListItem>
      </List>
    </Page>
  )
}

export default View
