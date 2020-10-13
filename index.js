/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main_BottomTab from './Main_BottomTab';
import Main_Drawer from './Main_Drawer';
import Main_MaterialTopTab from './Main_MaterialTopTab';

// AppRegistry.registerComponent(appName, () => Main_BottomTab);
// AppRegistry.registerComponent(appName, () => Main_MaterialTopTab);
AppRegistry.registerComponent(appName, () => Main_Drawer);
