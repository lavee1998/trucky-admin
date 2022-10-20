import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import React, { KeyboardEvent } from 'react'

type SearchDialogProps = {
  open: boolean
  search: string
  cancelButtonText: string
  searchButtonText?: string
  onClose: () => void
  onSearch: () => void
  onSearchClose: () => void
  onSearchChange: (search: string) => void
}

const SearchDialog = ({
  open,
  search,
  cancelButtonText,
  searchButtonText = 'Search',
  onClose,
  onSearch,
  onSearchClose,
  onSearchChange,
}: SearchDialogProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      onSearch()
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6">Search</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1">Search in company IDs only</Typography>
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          onKeyDown={handleKeyDown}
          value={search}
          onChange={({ target }) => onSearchChange(target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onSearchClose} size="small">
          {cancelButtonText}
        </Button>
        <Button onClick={onSearch} color="primary" variant="contained" size="small">
          {searchButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SearchDialog
