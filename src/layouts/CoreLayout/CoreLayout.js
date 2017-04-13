import React from 'react'
import Header from 'containers/HeaderContainer'
import 'styles/core.scss'

export const CoreLayout = ({children}) => (
  <div>
    <Header/>
    <div className='col-xs-12'>
      {children}
    </div>
  </div>
)

export default CoreLayout
