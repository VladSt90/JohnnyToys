import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ToysListScreen} from './screens/toys-list-screen/toys-list-screen.component';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ToyCreationScreen} from './screens/toy-creation-screen/toy-creation-screen.component';
import {ToyEditScreen} from './screens/toy-edit-screen/toy-edit-screen.component';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export const SCREEN_NAMES = {
  toysList: 'ToysList',
  toyCreation: 'ToyCreation',
  toyEdit: 'ToyEdit',
};

export const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name={SCREEN_NAMES.toysList}
              component={ToysListScreen}
            />
            <RootStack.Screen
              name={SCREEN_NAMES.toyCreation}
              component={ToyCreationScreen}
            />
            <RootStack.Screen
              name={SCREEN_NAMES.toyEdit}
              component={ToyEditScreen}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};
