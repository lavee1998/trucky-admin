import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { Authenticator, AmplifyProvider } from '@aws-amplify/ui-react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import '@aws-amplify/ui-react/styles.css'
import { ThemeProvider } from '@mui/material'
import App from './components/App'
import awsExports from './aws-exports'
import reportWebVitals from './reportWebVitals'
import { createStore } from './store'
import './index.css'
import theme from './theme'

const history = createBrowserHistory()
const store = createStore({
  history,
})

Amplify.configure(awsExports)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.Fragment>
    <AmplifyProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Authenticator hideSignUp variation="modal">
              {({ signOut, user }) => <App signOut={signOut} user={user} />}
            </Authenticator>
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    </AmplifyProvider>
  </React.Fragment>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
