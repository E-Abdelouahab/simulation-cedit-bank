import React from 'react'
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'

// Import All Component
import Register from './component/Register'
import ActivationAccount from './component/ActivationAccount'

export default function Routes() {
    return (
        <NativeRouter>
          <Switch>
          <Route path="/" exact component={Splash} />
            <Route path="/register" exact component={Register} />
            <Route path="/credit" exact component={Credit} />
            <Route path="/active-account" exact component={ActivationAccount} />
            <Route path="/verification" exact component={Verification} />

          </Switch>  
        </NativeRouter>
    )
}

