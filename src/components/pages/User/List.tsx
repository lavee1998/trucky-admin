import React from 'react'
import { Page } from '../../../modules/app'
import { useUser, UserList } from '../../../modules/user'

const List = () => {
  const { users } = useUser()
  return (
    <Page title="User list">
      <UserList items={users} />
    </Page>
  )
}

export default List
