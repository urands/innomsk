import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from '../actions'
import * as selectors from '../selectors'

type OwnProps = {
  loading: boolean
  role: string | null
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  loading: selectors.loaderSelector,
  role: selectors.roleSelector,
})

const mapDispatchToProps = {
  fetchDetailedAbilityHero: actions.fetchDetailedAbilityHero,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
