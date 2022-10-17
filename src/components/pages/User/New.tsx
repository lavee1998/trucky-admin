import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from 'modules/user'
import NewUserView from 'modules/user/components/NewUserView'

const New = () => {
  const history = useHistory()
  const { addUser } = useUser()

  const handleGoBack = () => {
    history.push('/users')
  }

  const handleUploadUser = async (file: File) => {
    await addUser({ file })
  }

  return <NewUserView onUploadUser={handleUploadUser} onGoBack={handleGoBack} />
}

export default New
