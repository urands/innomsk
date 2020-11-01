import * as t from '../actionTypes'
import axios, { AxiosResponse } from 'axios'

import { Settings } from 'config'

const { API } = Settings

type Response = {
  username: string
  role: string
  access_token: string
}

type Payload = {
  user: string
  role: string
  token: string
}

export type AuthenticationAction = FSA<undefined, Payload, string>
type Authentication = (login: string, password: string) => MrxThunk<AuthenticationAction>

export const authentication: Authentication = (login, password) => async (dispatch) => {
  dispatch({
    type: t.LOGIN,
    meta: { done: false },
  })

  try {
    const { data }: AxiosResponse<Response> = await axios({
      method: 'POST',
      url: `${API}/api/login`,
      data: {
        username: login,
        password,
      },
    })

    console.log(data)

    if (!data) {
      throw new Error('Response you is not authorization!')
    }

    const { access_token, role, username } = data

    dispatch({
      type: t.LOGIN,
      payload: {
        user: username,
        role,
        token: access_token,
      },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.LOGIN,
      payload: error,
      error: true,
    })
  }
}
