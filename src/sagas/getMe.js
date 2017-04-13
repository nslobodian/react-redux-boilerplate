import {take, call, put} from 'redux-saga/effects'
import request from 'sagas/api'
import {GET_ME_ATTEMPT, getMeSuccess, getMeFailure} from 'redux/Auth'

export default function*() {
  while (true) {
    yield take(GET_ME_ATTEMPT)
    const body = {
      method: 'GET'
    }

    try {
      const res = yield call(request, 'me', body)
      yield put(getMeSuccess(res))
    } catch (error) {
      yield put(getMeFailure())
    }
  }
}
