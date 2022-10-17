import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'

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
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              <Link color="inherit" href="/" sx={{ textDecoration: 'none' }}>
                Eco Drive
              </Link>
            </Typography>
          </Box>

          <Button color="inherit" onClick={handleClickSignOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppNavBar
