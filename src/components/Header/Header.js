import React from 'react'
import Link from 'react-router/lib/Link'
import {pure} from 'recompose'
import urls from 'utils/urls'
const {home} = urls

export const Header = pure(({loggedIn, logout, username}) =>
<nav className='navbar navbar-inverse'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to={home} className='navbar-brand'>Project</Link>
      </div>

      <div className='collapse navbar-collapse'>
        <ul className='nav navbar-nav'>
          <li><Link to={home}>Test</Link></li>
          <li><Link to={home}>Test 2</Link></li>
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <a href='#'>{username}</a>
          </li>
          <li>
            <button onClick={logout} className='btn btn-default navbar-btn'>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
