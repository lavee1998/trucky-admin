import React, { useEffect } from 'react'
import { ChangeEvent, useState } from 'react'
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import { useHistory } from 'react-router-dom'
import { Loader } from 'modules/app'
import { useUser } from 'modules/user'

type NewUserViewProps = {
  onGoBack: () => void
  onUploadUser: (file: File) => unknown
}
const NewUserView = ({ onGoBack, onUploadUser }: NewUserViewProps) => {
  const [file, setFile] = useState<null | File>(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  // const history = useHistory()
  // const { addUser } = useUser()

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    const file = e.target.files[0]
    setFile(file)

    const reader = new FileReader()
    reader.onload = evt => {
      if (!evt?.target?.result) {
        return
      }
      const { result } = evt.target
    }
    reader.readAsBinaryString(file)
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  const goBack = () => {
    onGoBack()
    // history.push('/users')
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleUploadUser = async () => {
    setLoading(true)
    if (file) {
      await onUploadUser(file)
      // await addUser(file)
    }
    setLoading(false)
    handleCancel()
  }

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleCancel}
      TransitionProps={{ onExited: goBack }}>
      <DialogTitle id="form-dialog-title">Add new user</DialogTitle>
      <DialogContent>
        <DialogContentText>Some instruction text can come here.</DialogContentText>
        <Loader loading={loading} />
        <Box>
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileIcon />}
            sx={{ marginRight: '1rem' }}>
            Upload CSV
            <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
          </Button>
          <Box>{file?.name}</Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={!file || loading}
          onClick={handleUploadUser}
          color="primary">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewUserView
