import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

type AppNavBarProps = {
  signOut: () => {}
}

const AppNavBar = ({ signOut }: AppNavBarProps) => {
  const handleClickSignOut = () => {
    signOut()
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
