import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import createRootReducer from './reducers'
import { sagas as userSagas } from '../modules/user'
import { sagas as lessonSagas } from '../modules/lesson'
import { sagas as appSagas } from '../modules/app'

const createStore = ({ history }: any) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: createRootReducer({ history }),
    middleware: [...getDefaultMiddleware(), routerMiddleware(history), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  })

  sagaMiddleware.run(function* () {
    yield all([...appSagas, ...userSagas, ...lessonSagas])
  })

  return store
}

export default createStore
