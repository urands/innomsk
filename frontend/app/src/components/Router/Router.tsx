import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'

import features from 'features'

export const Router = () => {
  return (
    <Switch>
      <PublicRoute path='/' exact component={features.main.pages.Main} />
      <ProtectedRoute path='/dashboard' component={features.dashboard.pages.Dashboard} />
      <Redirect to='/' />
    </Switch>
  )
}
