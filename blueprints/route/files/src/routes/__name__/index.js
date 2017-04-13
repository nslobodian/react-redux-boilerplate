import {injectReducer} from 'store/reducers'
import {injectSagas} from 'store/sagas'

export default (store) => ({
  path: '<%= dashesEntityName %>',
  getComponent (nextState, cb) {
    Promise.all([
      System.import('./containers/<%= pascalEntityName %>Container'),
      System.import('./modules/<%= pascalEntityName %>'),
    ]).then((modules) => {
      const <%= pascalEntityName %> = modules[0].default
      const reducer = modules[1].default

      injectSagas(store, {key: '<%= pascalEntityName %>', sagas: []})
      injectReducer(store, {key: '<%= pascalEntityName %>', reducer})

      cb(null, <%= pascalEntityName %>)
    })
  }
})