// @ts-ignore
import { putAsync, takeEveryAsync } from 'saga-toolkit'
import { actions as userActions } from '../user'
import * as actions from './slice'
import { put, takeEvery } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'

function* appStart() {
  try {
    // yield putAsync(lessonActions.fetchLessons())
  } catch (error) {
    console.error('Error during AppStart:', error)
  }
}

function* locationChange({ payload }: any) {
  console.log({ payload })
  const { location } = payload
  console.log({ location })

  const { pathname } = location || {}

  try {
    switch (true) {
      case pathname.startsWith('/users'):
        console.log("lúzerek")
        // const { lesson } = params
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
