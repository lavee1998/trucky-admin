import React, { useState, useEffect } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { Loader } from 'modules/app'
import { User } from 'modules/api'

type RemoveUserProps = {
  user: User
  onGoBack: () => void
  onRemoveUser: (user: User) => unknown
}
const RemoveUser = ({ user, onGoBack, onRemoveUser }: RemoveUserProps) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const goBack = () => {
    onGoBack()
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleRemove = async () => {
    setLoading(true)
    if (user) {
      await onRemoveUser(user)
    }

    setLoading(false)
    handleCancel()
  }

  useEffect(() => {
    setOpen(true)
  }, [])

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
