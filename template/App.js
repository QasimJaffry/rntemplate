import React from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Route from './src/navigation';
import { persistor, store } from './src/redux/store';
import { ThemeProvider } from './src/theme';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
            <Route />
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
