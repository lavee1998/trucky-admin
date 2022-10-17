import React from 'react'
import { useAppStart, AppNavBar } from 'modules/app'
import Routes from './Routes'

type AppProps = {
  signOut: (() => void) | undefined
  user: any
}

const App = ({ signOut }: AppProps) => {
  useAppStart()

  return (
    <React.Fragment>
      <AppNavBar signOut={signOut} />
      <Routes />
    </React.Fragment>
  )
}

export default App
