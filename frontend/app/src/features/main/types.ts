/// ////////////////////////////////////////////////////////////////////////////////
// DATA TYPES
/// ////////////////////////////////////////////////////////////////////////////////

export type UIState = {
  userName: string
  password: string
  token: null | string
}

/// ////////////////////////////////////////////////////////////////////////////////
//  REDUX STATE
/// ////////////////////////////////////////////////////////////////////////////////

export type MainState = {
  user: null
  isLoading: boolean
  UIState: UIState
}
