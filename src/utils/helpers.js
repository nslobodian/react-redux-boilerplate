import moment from 'moment'

export const composeUrl = keys => Object.keys(keys).map(
  key => keys[key] === undefined ? '' : `${key}=${keys[key]}`).join('&')

export const convertDate = date => moment(date).format('DD.MM.YYYY HH:mm')