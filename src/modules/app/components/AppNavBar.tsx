import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

type AppNavBarProps = {
  signOut: (() => void) | undefined
}

const AppNavBar = ({ signOut }: AppNavBarProps) => {
  const handleClickSignOut = async (): Promise<void> => {
    await signOut?.()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Eco Drive
          </Typography>
          <Button color="inherit" onClick={handleClickSignOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppNavBar
