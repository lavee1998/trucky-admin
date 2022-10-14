import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './slice'
import * as selectors from './selectors'

export const useLesson = (): actions.LessonState & actions.LessonActions => ({
  ...bindActionCreators(actions, useDispatch()),
  ...useSelector(selectors.selectRoot),
})
