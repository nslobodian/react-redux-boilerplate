import createReducer from 'utils/createReducer'

// ------------------------------------
// Constants
// ------------------------------------

export const <%= pascalEntityName.toUpperCase() %>ATTEMPT = '<%= pascalEntityName.toUpperCase() %>ATTEMPT'

// ------------------------------------
// Actions
// ------------------------------------

export const <%= pascalEntityName.toLowerCase() %>ATEMPT = (params) => (dispatch, getStore) => {
  dispatch({
    type: <%= pascalEntityName.toUpperCase() %>ATTEMPT,
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
  [<%= pascalEntityName.toUpperCase() %>ATTEMPT]: (state, action) => ({
    fetching: false
  })
})
