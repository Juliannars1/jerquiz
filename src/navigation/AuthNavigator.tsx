import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
