import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboardingpage from './src/pages/Onboardingpage';
import RErating from './src/pages/RErating';
import Counterrating from './src/pages/Counterrating';
import Goodsuggestions from './src/pages/Goodsuggestions';
import Badsuggestions from './src/pages/Badsuggestions';
import Goodfeedback from './src/pages/Counterfeedback/Goodfeedback';
import Badfeedback from './src/pages/Counterfeedback/Badfeedback';
import Usersurvey from './src/pages/Survey/Usersurvey';
import Phone from './src/pages/Survey/Phone';
import Thankyou from './src/pages/Thankyou';
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
        <Stack.Screen name="Badsuggestions" component={Badsuggestions} />
        <Stack.Screen name="Goodfeedback" component={Goodfeedback} />
        <Stack.Screen name="Badfeedback" component={Badfeedback} />
        <Stack.Screen name="Usersurvey" component={Usersurvey} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Thankyou" component={Thankyou} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



