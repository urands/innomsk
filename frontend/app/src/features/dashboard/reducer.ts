import { handleActions } from 'redux-actions'
// import { produce } from 'immer'
// import * as tm from '../main/actionTypes'
import { DashboardState } from './types'

const initState: DashboardState = {
  loading: true,
}

export default handleActions({}, initState)
