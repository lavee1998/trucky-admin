import React from 'react'
import {
  Authenticator,
  ThemeProvider,
  AmplifyProvider,
  withAuthenticator,
} from '@aws-amplify/ui-react'
import { useAppStart } from '../../modules/app'
import { AppNavBar } from '../../modules/app'
import { Routes } from '../navigators'

type AppProps = {
  signOut: (() => void) | undefined
  user: any
}

function App({ signOut, user }: AppProps) {
  useAppStart()

  return (
    <React.Fragment>
      <AppNavBar signOut={signOut} />
      <Routes />
    </React.Fragment>
  )
}

export default withAuthenticator(App)
