import { call, put } from 'redux-saga/effects'
// eslint-disable-next-line import/no-cycle
import api from '~/services/api'
import DaysActions from '~/store/ducks/days'

export function * loadDays () {
  try {
    const response = yield call(api.get, 'days')
    console.tron.log(response.data, 'Load Days')
    yield put(DaysActions.loadData(response.data))
  } catch (err) {
    console.tron.log(err)
  }
}
