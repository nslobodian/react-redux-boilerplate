import {take, call, put} from 'redux-saga/effects'
import {SubmissionError} from 'redux-form'
import request from 'sagas/api'
import {SIGN_IN_ATTEMPT, SIGN_IN_SUCCESS, SIGN_IN_FAILURE} from 'redux/Auth'
import {push} from 'react-router-redux'
import urls from 'utils/urls'
const {home} = urls

export default function*() {
  while (true) {
    const {values, resolve, reject} = yield take(SIGN_IN_ATTEMPT)
    const body = {
      method: 'POST',
      body: values
    }

    try {
      const res = yield call(request, 'login', body)
      localStorage.setItem('token', res.token)
      yield put(push(home))
      yield put({type: SIGN_IN_SUCCESS})
      resolve()
    } catch (error) {
      yield put({type: SIGN_IN_FAILURE})
      reject(new SubmissionError({password: 'wrong credentials'}))
    }
  }
}

