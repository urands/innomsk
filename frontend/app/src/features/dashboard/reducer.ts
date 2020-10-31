import { handleActions } from 'redux-actions'
// import { produce } from 'immer'
// import * as tm from '../main/actionTypes'
import { SingleState } from './types'

const initState: SingleState = {
  loading: true,
}

export default handleActions({}, initState)
