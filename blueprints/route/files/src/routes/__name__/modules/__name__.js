import createReducer from 'utils/createReducer'
import {actionCreator, reducerHelper} from 'store/helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const <%= pascalEntityName.toUpperCase() %>_ATTEMPT = '<%= pascalEntityName.toUpperCase() %>_ATTEMPT'

// ------------------------------------
// Actions
// ------------------------------------

export const <%= pascalEntityName.toLowerCase() %>Attempt = (params) => (dispatch, getStore) => {
  dispatch({
    type: <%= pascalEntityName.toUpperCase() %>_ATTEMPT,
  params
  })
  }

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false
}

export default createReducer(initialState, {
  [<%= pascalEntityName.toUpperCase() %>_ATTEMPT]: (state, action) => ({
    loading: false
  })
  })
