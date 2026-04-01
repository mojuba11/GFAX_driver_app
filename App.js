import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import our Navigation Stack
import DriverNavigation from './src/navigation/DriverStack';

export default function App() {
  return (
    /* GestureHandlerRootView is required for the RequestModal 
      and interactive maps to work smoothly on Android.
    */
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* Set the status bar to dark to contrast with the light map */}
        <StatusBar style="dark" />
        
        <View style={styles.container}>
          <DriverNavigation />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});