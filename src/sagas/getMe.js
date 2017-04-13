import {take, call, put} from 'redux-saga/effects'
import request from 'sagas/api'
import {GET_ME_ATTEMPT, GET_ME_SUCCESS, GET_ME_FAILURE, logout} from 'redux/Auth'

export default function*() {
  while (true) {
    yield take(GET_ME_ATTEMPT)
    const body = {
      method: 'GET'
    }

    try {
      const user = yield call(request, 'me', body)
      yield put({
        type:GET_ME_SUCCESS,
        user
      })
    } catch (error) {
      yield put({type: GET_ME_FAILURE})
      yield put(logout())
    }
  }
}
