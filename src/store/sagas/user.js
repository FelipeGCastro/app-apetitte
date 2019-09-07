import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import store from '~/store';
import api from '~/services/api';
import UserActions from '~/store/ducks/user';

export function* init() {
  try {
    const response = yield call(api.get, 'user');
    console.tron.log(response.data, 'Load Days');
    yield put(UserActions.loadUser(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}

export function* checkDays({ dayId, productIndex }) {
  try {
    const { days } = store.getState().days;
    console.tron.log(days, dayId, productIndex, 'dia escolhido');
    const checkDay = days.filter((day) => day.id === dayId)[0];
    switch (productIndex) {
      case 'snack1':
        if (checkDay.snack2 && checkDay.drink) {
          yield put(UserActions.downDays());
          console.tron.log('Tirou Dia, snack1');
        }
        break;
      case 'snack2':
        if (checkDay.snack1 && checkDay.drink) {
          yield put(UserActions.downDays());
          console.tron.log('Tirou Dia, snack2');
        }
        break;
      case 'drink':
        if (checkDay.snack1 && checkDay.snack2) {
          yield put(UserActions.downDays());
          console.tron.log('Tirou Dia, drink');
        }
        break;

      default:
        console.tron.log('Algum erro ao tirar dias');
        break;
    }
  } catch (err) {
    console.tron.log(err, 'caiu erro ao diminuir');
  }
}
export function* checkDaysUp({ dayId, productIndex }) {
  try {
    const { days } = store.getState().days;
    console.tron.log(days, dayId, productIndex, 'dia escolhido');
    const checkDay = days.filter((day) => day.id === dayId)[0];
    switch (productIndex) {
      case 'snack1':
        if (checkDay.snack2 && checkDay.drink) {
          yield put(UserActions.upDays());
          console.tron.log('Tirou Dia, snack1');
        }
        break;
      case 'snack2':
        if (checkDay.snack1 && checkDay.drink) {
          yield put(UserActions.upDays());
          console.tron.log('Tirou Dia, snack2');
        }
        break;
      case 'drink':
        if (checkDay.snack1 && checkDay.snack2) {
          yield put(UserActions.upDays());
          console.tron.log('Tirou Dia, drink');
        }
        break;

      default:
        console.tron.log('Algum erro ao tirar dias');
        break;
    }
  } catch (err) {
    console.tron.log(err, 'caiu erro ao diminuir');
  }
}
