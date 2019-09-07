import React from 'react';
import { YellowBox } from 'react-native';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

YellowBox.ignoreWarnings([
  'Async Storage has been'
]);
const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
