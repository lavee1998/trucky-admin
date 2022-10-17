import React from 'react'
import { useHistory } from 'react-router-dom'
import { RemoveUserView, useUser } from 'modules/user'
import { User } from 'modules/api'

const RemoveUser = () => {
  const history = useHistory()
  const { user, removeUser } = useUser()

  const goBack = () => {
    history.push('/users')
  }

  const handleRemoveUser = async (user: User) => {
    await removeUser({ id: user.id })
  }

  if (!user) {
    return null
  }

  return <RemoveUserView onGoBack={goBack} onRemoveUser={handleRemoveUser} user={user} />
}

export default RemoveUser
