import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { Page } from 'modules/app'
import { useUser, UserList } from 'modules/user'
import { User } from 'modules/api'

const List = () => {
  const { users, total, page, limit, clearUser, setSearch, search, fetchUsers, setPage } = useUser()
  const history = useHistory()
  const match = useRouteMatch()

  const handleClickNewUser = () => {
    history.push(match.url + '/new')
  }

  const handleClickUserDetails = (user: User): void => {
    history.push(`${match.url}/${user.id}/view`)
  }

  const handleClickUserRemove = (user: User): void => {
    history.push(`${match.url}/${user.id}/remove`)
  }

  const handleFetchUsers = async () => {
    await fetchUsers()
  }

  const handleSearch = async (search: string) => {
    clearUser()
    setSearch(search)
    await fetchUsers()
  }

  return (
    <Page title="">
      <Box marginBottom={4}>
        <UserList
          onFetchUsers={handleFetchUsers}
          onClickUserRemove={handleClickUserRemove}
          onClickUserDetails={handleClickUserDetails}
          onSearch={handleSearch}
          onSetPage={setPage}
          page={page}
          items={users}
          total={total}
          limit={limit}
          filter={search}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleClickNewUser}>
        Upload users
      </Button>
    </Page>
  )
}

export default List
