/**
 * @format
 */

require('react-native').unstable_enableLogBox();

import {AppRegistry} from 'react-native';
import App from './src/routes/index.routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);