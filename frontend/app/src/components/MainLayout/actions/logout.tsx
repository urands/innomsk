import * as t from '../actionType'

export type LogoutAction = BaseFSA<undefined>

type Logout = () => MrxThunk<LogoutAction>

export const logout: Logout = () => async (dispatch) => {
  dispatch({
    type: t.LOGOUT,
  })
}
