import { createSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'

type LoaderSelector = (state: ReduxState) => boolean
type RoleSelector = (state: ReduxState) => string | null

const getLoaderSelector: LoaderSelector = (state) => state.dashboard.loading
const getRoleSelector: RoleSelector = (state) => state.main.UIState.role

export const loaderSelector = createSelector(getLoaderSelector, (loader) => loader)
export const roleSelector = createSelector(getRoleSelector, (role) => role)
