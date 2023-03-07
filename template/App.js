import React from 'react';
import { ActivityIndicator, LogBox, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Route from './src/navigation';
import { persistor, store } from './src/redux/store';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={() => <ActivityIndicator />}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar backgroundColor={'white'} barStyle="dark-content" />
          <Route />
        </View>
      </PersistGate>
    </Provider>
  );
}
