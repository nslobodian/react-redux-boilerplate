import HomeRoute from 'routes/Home'

describe('(Route) HomeRoute', () => {
  let route

  beforeEach(() => {
    route = HomeRoute({
      dispatch: () => ({}),
      asyncReducers: [],
      asyncSagas: [],
      runSaga: function*() {},
      replaceReducer: () => ({})
    })
  })

  it('getComponent shouldn\' throw error', () => {
    route.getComponent({}, () => ({}))
  })

  it('Should return a route configuration object', () => {
    expect(typeof route).to.equal('object')
  })
})
