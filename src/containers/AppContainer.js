import React, {Component} from 'react'
import {Router} from 'react-router'
import {Provider, connect} from 'react-redux'
import {Notifs} from 'redux-notifications'
import {checkToken} from 'redux/Auth'

@connect(null, {checkToken})
class AppContainer extends Component {

  componentWillMount () {
    this.props.checkToken()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const {history, routes, store} = this.props

    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Router
            history={history}
            children={routes}
          />
          <Notifs />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
