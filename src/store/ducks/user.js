import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
// actionType: ['dataPassed'],
  loadUser: ['data'],
  downDays: null,
  upDays: null
})

export const UserTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  user: {}
})

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_USER]: (state, { data }) => state.merge({ user: data }),
  [Types.DOWN_DAYS]: (state) => state.merge({
    user: {
      ...state.user,
      days: state.user.days - 1
    }
  }),
  [Types.UP_DAYS]: (state) => state.merge({
    user: {
      ...state.user,
      days: state.user.days + 1
    }
  })
})
