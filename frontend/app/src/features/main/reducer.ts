import { handleActions } from 'redux-actions'
import { produce } from 'immer'

import * as t from './actionTypes'
import * as ml from 'components/MainLayout/actionType'
import { MainState } from './types'

const initState: MainState = {
  user: null,
  isLoading: false,
  UIState: {
    token: null,
    role: null,
  },
}

type Payload = {
  user: string
  role: string
  token: string
}

export default handleActions<MainState, Payload>(
  {
    [t.LOGIN]: (state, action) =>
      produce(state, (draft) => {
        const { payload } = action

        if (payload) {
          draft.user = payload.user
          draft.UIState.role = payload.role
          draft.UIState.token = payload.token
          draft.isLoading = false
        }
      }),
    [ml.LOGOUT]: (state) =>
      produce(state, (draft) => {
        draft.user = null
        draft.UIState.role = null
        draft.UIState.token = null
      }),
  },
  initState
)
