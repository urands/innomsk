import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import features from 'features'
import { MainLayout } from 'components/MainLayout'

export const Router = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={features.main.pages.Main} />
        <Route path='/dashboard' component={features.single.pages.Dashboard} />
        <Redirect to='/' />
      </Switch>
    </MainLayout>
  )
}
