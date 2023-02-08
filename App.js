import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboardingpage from './src/pages/Onboardingpage';
import RErating from './src/pages/RErating';
import Counterrating from './src/pages/Counterrating';
import Goodsuggestions from './src/pages/Goodsuggestions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Onboardingpage">
        <Stack.Screen name="Onboardingpage" component={Onboardingpage}   options={{headerShown: false}}/>
        <Stack.Screen name="RErating" component={RErating} />
        <Stack.Screen name="Counterrating" component={Counterrating} />
        <Stack.Screen name="Goodsuggestions" component={Goodsuggestions} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



