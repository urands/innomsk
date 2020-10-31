import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from '../actions'
import * as selectors from '../selectors'

type OwnProps = {
  loading: boolean
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  loading: selectors.loaderSelector,
})

const mapDispatchToProps = {
  authentication: actions.authentication,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
