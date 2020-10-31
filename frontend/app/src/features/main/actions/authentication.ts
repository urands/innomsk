import * as t from '../actionTypes'
import axios, { AxiosResponse } from 'axios'

type Response = {
  role: string
  access_token: string
}

type Payload = {
  role: string
  token: string
}

export type AuthenticationAction = FSA<undefined, Payload, string>
type Authentication = (userName: string, password: string) => MrxThunk<AuthenticationAction>

export const authentication: Authentication = (userName, password) => async (dispatch) => {
  dispatch({
    type: t.FETCH_ABILITI_HERO,
    meta: { done: false },
  })

  try {
    const { data }: AxiosResponse<Response> = await axios({
      method: 'GET',
      url: ``,
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    dispatch({
      type: t.FETCH_ABILITI_HERO,
      payload: {
        role: '',
        token: '',
      },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.FETCH_ABILITI_HERO,
      payload: error,
      error: true,
    })
  }
}
