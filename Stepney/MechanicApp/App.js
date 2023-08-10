import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/components/DrawerNavigation/RootNavigator';
import SignUpScreen from './src/screens/SmallScreens/SignupScreen';

const App = () => {
  const [isSignup, setIsSignup] = useState(false);

  // Function to handle user login
  const handleSignUp = () => {
    // Perform the login logic here, and if successful, set isLoggedIn to true
    setIsSignup(true);
  };

  return (
    <>
    {/* // <NavigationContainer> */}
      <StatusBar barStyle={'default'} />
      <SafeAreaView style={{ flex: 1 }}>
        {/* {isSignup ? (
          <RootNavigator />
        ) : (
          <SignUpScreen onSignup={() => handleSignUp()} />
        )} */}
        <RootNavigator />
      </SafeAreaView>
    {/* // </NavigationContainer> */}
    </>
  );
};

export default App;
