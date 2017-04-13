import mergeAll from 'ramda/src/mergeAll'

export const actionCreator = (type, prop) => val => ({type, [prop]: val})
export const actionPaginationCreator = (type, cb, prop = 'pagination') => value => dispatch => {
  dispatch({
    type,
    [prop]: value
  })
  dispatch(cb())
}
export const actionChangeFilterCreator = (type, cb) => (key, value, attempt = true) => dispatch => {
  dispatch({
    type,
    searchValues: {[key]: value || undefined}
  })
  attempt && dispatch(cb())
}

export const reducerHelper = actions =>
  mergeAll(actions.map(action => {
      const parsedString = action.split('.')[1].split('_')
      const actionType = parsedString[parsedString.length - 1]
      const nameArray = parsedString.splice(0, parsedString.length - 1)

      const name = nameArray.map((word, index) => {
        const lowercase = word.toLowerCase()
        if (!index) {
          return lowercase
        }
        return lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
      }).join('')
      const dataName = nameArray.length > 1 ? nameArray[1].toLowerCase() : ''

      switch (actionType) {
        case 'ATTEMPT':
          return {
            [action]: () => ({
              [`${name}Loading`]: true
            }),
          }
        case 'SUCCESS':
          return {
            [action]: ({[dataName]: {searchValues}}, {pagination, data}) => ({
              [`${name}Loading`]: false,
              [dataName]: {
                searchValues,
                pagination,
                data
              }
            })
          }
        case 'SUCCESSFULLY':
          return {
            [action]: (state, {type, ...data}) => ({
              [`${name}Loading`]: false,
              ...data
            }),
          }
        case 'FAILURE':
          return {
            [action]: () => ({[`${name}Loading`]: false}),
          }
        case 'PAGINATION':
          return {
            [action]: ({[dataName]: {data, pagination, searchValues}}, action) => ({
              [dataName]: {
                data,
                searchValues,
                pagination: {
                  ...pagination,
                  ...action.pagination
                }
              }
            })
          }
        case 'PROPS':
          return {
            [action]: ({pagination}, action) => ({
              pagination: {
                ...pagination,
                ...action.pagination
              }
            })
          }
        case 'FILTERS':
          return {
            [action]: ({searchValues}, action) => ({
              searchValues: {
                ...searchValues,
                ...action.searchValues
              }
            })
          }
        default:
          return {
            [action]: (state, {type, ...data}) => (data)
          }
      }
    })
  )