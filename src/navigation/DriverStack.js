import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import all the screens we just built
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DriverHome from '../screens/DriverHome';
import EarningsScreen from '../screens/EarningsScreen';
import InventoryScreen from '../screens/InventoryScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 1. The Dashboard (Tabs)
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1A237E', // Navy Blue
      tabBarInactiveTintColor: '#94A3B8',
      tabBarStyle: { height: 70, paddingBottom: 10 }
    }}
  >
    <Tab.Screen 
      name="Drive" 
      component={DriverHome} 
      options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="steering" size={28} color={color} />
      }}
    />
    <Tab.Screen 
      name="Earnings" 
      component={EarningsScreen} 
      options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cash-multiple" size={28} color={color} />
      }}
    />
    <Tab.Screen 
      name="Inventory" 
      component={InventoryScreen} 
      options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="package-variant" size={28} color={color} />
      }}
    />
  </Tab.Navigator>
);

// 2. The Main Navigator (Auth + Tabs)
const DriverNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

export default DriverNavigation;