import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboardingpage from './src/pages/Onboardingpage';
import RErating from './src/pages/RErating';
import Counterrating from './src/pages/Counterrating';
// import Goodsuggestions from './src/pages/Goodsuggestions';
import Badsuggestions from './src/pages/Badsuggestions';
import Goodfeedback from './src/pages/Counterfeedback/Goodfeedback';
import Badfeedback from './src/pages/Counterfeedback/Badfeedback';
import Usersurvey from './src/pages/Survey/Usersurvey';
import Phone from './src/pages/Survey/Phone';
import Thankyou from './src/pages/Thankyou';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserAuthContextProvider } from './src/context/StorageContex';
import Login from './src/pages/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserAuthContextProvider>

    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

        <Stack.Screen name="Onboardingpage" component={Onboardingpage}   options={{headerShown: false}}/>
        <Stack.Screen name="RErating" component={RErating} options={{title: ""}}/>
        <Stack.Screen name="Counterrating" component={Counterrating} options={{title: ""}}/>
        {/* <Stack.Screen name="Goodsuggestions" component={Goodsuggestions} /> */}
        <Stack.Screen name="Badsuggestions" component={Badsuggestions} options={{title: ""}}/>
        <Stack.Screen name="Goodfeedback" component={Goodfeedback} options={{title: ""}}/>
        <Stack.Screen name="Badfeedback" component={Badfeedback} options={{title: ""}}/>
        <Stack.Screen name="Usersurvey" component={Usersurvey} options={{title: ""}}/>
        <Stack.Screen name="Phone" component={Phone} options={{title: ""}}/>
        <Stack.Screen name="Thankyou" component={Thankyou} options={{title: "",headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
    </UserAuthContextProvider>

  );
}



