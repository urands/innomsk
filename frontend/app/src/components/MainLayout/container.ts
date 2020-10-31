import { connect, ConnectedProps } from 'react-redux'
import * as actions from './actions'

const mapDispatchToProps = {
  logout: actions.logout,
}

export const connector = connect(null, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
