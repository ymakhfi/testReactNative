import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    //host: '192.168.0.201',
    name: 'RNZustandBoilerPlate',
  })
  // controls connection & communication settings
  .use(trackGlobalErrors())
  .useReactNative()

  .connect();
