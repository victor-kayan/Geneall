import React, { useReducer, useEffect, useMemo, createContext } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './stack.routes';
import Colors from '../../assets/colors';
import { SplashScreen, AppIntro as AppIntroScreen } from '../screens/switchScreens';


export const AppIntroContext = createContext();

export default function Routes({ navigation }) {
  const [ state, dispatch ] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SET_USERNAME':
          return {
            ...prevState,
            username: action.name,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
      username: null,
    }
  );

  useEffect(() => {
    // Fetch the name from storage then navigate to our appropriate place
    async function bootstrapAsync() {
      let username;

      try {
        // Try to get username from AsyncStorage
      } catch (e) {
        // Restoring name failed
      }

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'SET_USERNAME', name: username });
    }

    bootstrapAsync();
  }, []);

  const appIntroContext = useMemo(
    () => ({
      setUsername: async username => {
        // TODO:
        // - Validate input
        // - Persist the name using AsyncStorage

        dispatch({ type: 'SET_USERNAME', name: username })
      },
    }), []
  );

  const IntroStack = createStackNavigator();

  return (
    <AppIntroContext.Provider value={appIntroContext}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={Colors.PRIMARY_BLUE} />
        
        { state.isLoading ? (
          <IntroStack.Navigator>
            <IntroStack.Screen name='Splash' component={SplashScreen} />
          </IntroStack.Navigator>
          ) : state.username == null ? (
            <IntroStack.Navigator>
              <IntroStack.Screen name='AppIntro' component={AppIntroScreen} />
            </IntroStack.Navigator>
          ) : (
            // User has already set their name
            <AppStack />
          )}
      </NavigationContainer>
    </AppIntroContext.Provider>
  );
}