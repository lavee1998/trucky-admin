import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './slice'
import * as selectors from './selectors'

export const useUser = (): actions.UserState & actions.UserActions => ({
  ...bindActionCreators(actions, useDispatch()),
  ...useSelector(selectors.selectRoot),
})
