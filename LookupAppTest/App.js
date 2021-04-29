import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Lookup from './screens/Lookup';

const Stack = createStackNavigator();

const App = () => {
  

  return (
    <>
    <StatusBar barStyle="dark-content" hidden />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
      >

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown : false
          }}
        />
        
        <Stack.Screen 
          name="Lookup"
          component={Lookup}
          options={{
            headerShown : false
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
};



export default App;
