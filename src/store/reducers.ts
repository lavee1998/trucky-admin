import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { slice as app } from 'modules/app'
import { slice as user } from 'modules/user'

const createRootReducer = ({ history }: any) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    app,
    user,
  })

  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
  }

  return rootReducer
}

export default createRootReducer
