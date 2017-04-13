import mergeAll from 'ramda/src/mergeAll'

export const actionCreator = (type, prop) => val => ({type, [prop]: val})
export const actionPaginationCreator = (type, cb, prop = 'pagination') => value => dispatch => {
  dispatch({
    type,
    [prop]: value
  })
  dispatch(cb())
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
            [action]: (state, {type, ...data}) => ({
              [`${name}Loading`]: false,
              ...data
            }),
          }
        case 'FAILURE':
          return {
            [action]: () => ({[`${name}Loading`]: false}),
          }
        default:
          return {
            [action]: (state, {type, ...data}) => (data)
          }
      }
    })
  )