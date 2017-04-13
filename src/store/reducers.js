import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import {reducer as notifs} from 'redux-notifications'
import {reducer as modal} from 'redux-modal'
import Auth from 'redux/Auth'

export const makeRootReducer = (asyncReducers) =>
  combineReducers({
    ...asyncReducers,
    router,
    notifs,
    modal,
    form,
    Auth,
  })

export const injectReducer = (store, {key, reducer}) => {
  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }
}

export default makeRootReducer
