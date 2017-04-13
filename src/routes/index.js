import CoreLayout from 'layouts/CoreLayout'
import Login from './Login'
import Home from './Home'
import {errorNotification} from 'utils/notifications'
import urls from 'utils/urls'
const {login, home} = urls

const replaceIfNotLoggedIn = ({dispatch}, pathname, replace) => {
  const token = localStorage.getItem('token')

  if (!token && pathname !== login) {
    dispatch(errorNotification('Please sign in'))
    replace(login)
  } else if (token && pathname === login) {
    replace(home)
  }
}

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home(store),
  childRoutes: [
    Login(store),
    {
      path: '*',
      onEnter: (location, replace) => {
        replace(users)
      }
    }
  ],
  onEnter: ({location: {pathname}}, replace) => {
    replaceIfNotLoggedIn(store, pathname, replace)
  },
  onChange: (prevState, {location: {pathname}}, replace) => {
    replaceIfNotLoggedIn(store, pathname, replace)
  }
})

export default createRoutes
