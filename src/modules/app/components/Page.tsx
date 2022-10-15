import React, { ReactNode } from 'react'
import { Box, Container, Paper, Typography, useTheme } from '@mui/material'

type PageProps = {
  title?: string
  children: ReactNode
}

const Page = ({ children, title }: PageProps) => {
  const theme = useTheme()
  return (
    <Container>
      <Paper
        sx={{
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginTop: theme.spacing(5),
          padding: theme.spacing(5),
        }}>
        {!!title && <Typography variant="h5">{title}</Typography>}
        <Box sx={{ marginTop: theme.spacing(5) }}>{children}</Box>
      </Paper>
    </Container>
  )
}

export default Page
