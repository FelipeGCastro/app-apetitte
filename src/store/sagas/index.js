import { all, takeLatest } from 'redux-saga/effects'

import { DaysTypes } from '~/store/ducks/days'
// import { UserTypes } from '~/store/ducks/user';

import { loadDays } from './days'
// eslint-disable-next-line import/no-cycle
import { init, checkDays, checkDaysUp } from './user'

export default function * rootSaga () {
  yield all([
    init(),
    takeLatest(DaysTypes.LOAD_REQUEST, loadDays),
    takeLatest(DaysTypes.UPDATE_PRODUCT, checkDays),
    takeLatest(DaysTypes.REMOVE_PRODUCT, checkDaysUp)
  ])
}
