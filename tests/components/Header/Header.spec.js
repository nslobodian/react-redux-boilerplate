import React from 'react'
import {Header} from 'components/Header/Header'
import {shallow} from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('Renders a welcome message', () => {
    const welcome = _wrapper.find('.container')
    expect(welcome).to.exist
  })
})
