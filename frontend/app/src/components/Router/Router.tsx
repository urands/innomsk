import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import features from 'features'

export const Router = () => {
  return (
    <Switch>
      <Route path='/' exact component={features.main.pages.Main} />
      <Route path='/dashboard' component={features.dashboard.pages.Dashboard} />
      <Redirect to='/' />
    </Switch>
  )
}
