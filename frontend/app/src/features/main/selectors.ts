import { createSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'

type LoaderSelector = (state: ReduxState) => boolean

const getLoaderSelector: LoaderSelector = (state) => state.main.loading

export const loaderSelector = createSelector(getLoaderSelector, (loader) => loader)
