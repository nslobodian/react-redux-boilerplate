import React from 'react'
import HomeView from 'routes/Home/components/HomeView'
import {shallow} from 'enzyme'

const props = {
  getUsersAttempt: () => {},
  handleChangeFilter: () => {},
  users: []
}

describe('(Route) HomeView', () => {
  describe('(Components) HomeView', () => {
    it('Should render', () => {
      shallow(<HomeView {...props} />)
    })
  })
})
