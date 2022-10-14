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

function App({ signOut, user }) {
  useAppStart()

  return (
    <div className="App">
      <AppNavBar signOut={signOut} />
      <Routes />
    </div>
  )
}

export default withAuthenticator(App)
