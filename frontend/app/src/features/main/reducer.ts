import { handleActions } from 'redux-actions'
// import { produce } from 'immer'

// import * as t from './actionTypes'
import { MainState } from './types'

const initState: MainState = {
  user: null,
  isLoading: true,
  UIState: {
    userName: '',
    password: '',
    token: null,
  },
}

export default handleActions({}, initState)
