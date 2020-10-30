import { combineReducers } from 'redux'

import features from 'features'
import { MainState } from 'features/main/types'
import { SingleState } from 'features/dashboard/types'

export type ReduxState = {
  main: MainState
  dashboard: SingleState
}

const createRootReducer = combineReducers<ReduxState>({
  main: features.main.reducer,
  dashboard: features.dashboard.reducer,
})

export default createRootReducer
