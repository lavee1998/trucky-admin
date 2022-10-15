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
import { Loader } from '../../../modules/app'

const New = () => {
  const [filename, setFilename] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    const file = e.target.files[0]
    console.log({ file })
    const { name } = file
    setFilename(name)

    const reader = new FileReader()
    reader.onload = evt => {
      if (!evt?.target?.result) {
        return
      }
      const { result } = evt.target
      console.log({ result })
    }
    reader.readAsBinaryString(file)
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  const goBack = () => {
    history.push('/users')
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleUploadUser = async () => {
    setLoading(true)
    console.log('Add')
    setLoading(false)
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
          <Box>{filename}</Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUploadUser} color="primary" disabled={loading}>
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default New
