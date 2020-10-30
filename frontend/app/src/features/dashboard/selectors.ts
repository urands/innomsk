import { createSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
// import { AboutHero } from './types'

type LoaderSelector = (state: ReduxState) => boolean

const getLoaderSelector: LoaderSelector = (state) => state.dashboard.loading

export const loaderSelector = createSelector(getLoaderSelector, (loader) => loader)
