// @ts-ignore
import { putAsync, takeEveryAsync } from 'saga-toolkit'
import { put, takeEvery, select, take } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'
import { actions as userActions, selectors as userSelectors } from 'modules/user'
import * as selectors from './selectors'
import * as actions from './slice'

function* appStart() {
  try {
    // TODO
  } catch (error) {
    console.error('Error during AppStart:', error)
  }
}

function* locationChange({ payload }: any) {
  const { location } = payload

  const { pathname } = location || {}
  // @ts-ignore
  const started = yield select(selectors.selectStarted)
  const pathParts = pathname.split('/')
  const id = pathParts[2]

  if (!started) {
    yield take(actions.start.fulfilled)
  }

  try {
    switch (true) {
      case pathname === '/users':
        yield put(userActions.clearUser())
        // yield put(userActions.clearUsers())
        yield putAsync(userActions.fetchUsers())
        break
      case pathname.startsWith('/users/new'):
        break
      case pathname.startsWith('/users'):
        // @ts-ignore
        const user = yield select(userSelectors.selectUser)

        if (user?.id === +user) {
          break
        }

        yield put(userActions.fetchUser({ id }))
        break
      case pathname.startsWith('/users'):
        yield putAsync(userActions.fetchUsers())
        break

      default:
        break
    }
  } catch (e) {
    console.log('locationChange Error: ', e)
  }
}

export default [
  takeEveryAsync(actions.start.type, appStart),
  takeEvery(LOCATION_CHANGE as any, locationChange), //TODO
]
