import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './slice'
import * as selectors from './selectors'

export { useDispatch, useSelector }

export const useAppStart = () => {
  const { start } = useApp()

  useEffect(() => {
    start()
  }, [])
}

export const useApp = () => ({
  ...bindActionCreators(actions, useDispatch()),
  ...useSelector(selectors.selectRoot),
})
