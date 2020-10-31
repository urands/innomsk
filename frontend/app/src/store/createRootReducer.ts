import { combineReducers } from 'redux'

import features from 'features'
import { MainState } from 'features/main/types'
import { DashboardState } from 'features/dashboard/types'

export type ReduxState = {
  main: MainState
  dashboard: DashboardState
}

const createRootReducer = combineReducers<ReduxState>({
  main: features.main.reducer,
  dashboard: features.dashboard.reducer,
})

export default createRootReducer
