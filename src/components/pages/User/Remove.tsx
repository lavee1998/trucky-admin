import React, { useState, useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useParams, useHistory } from 'react-router-dom'
import { useUser } from '../../../modules/user'
import { Loader } from '../../../modules/app'

const RemoveUser = () => {
  console.log('REMOVEE')
  const { id } = useParams()
  const history = useHistory()
  const [open, setOpen] = useState(true)
  const { user, removeUser } = useUser()
  const [loading, setLoading] = useState(false)

  const goBack = () => {
    history.push('/users')
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleRemove = async () => {
    setLoading(true)
    await removeUser({ id })
    setLoading(false)
    handleCancel()
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  if (!user) {
    return null
  }

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleCancel}
      TransitionProps={{ onExited: goBack }}>
      <DialogTitle id="form-dialog-title">
        Remove {user?.firstName} {user?.lastName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Some instruction text can come here.</DialogContentText>
        <Loader loading={loading} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleRemove} color="primary" disabled={loading}>
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RemoveUser
