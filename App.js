import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './src/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';








const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#e96e6e"
        
      }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({size,color,focused})=>{
          return <Entypo name="home" color={color} size={size} />    
        }}} />

        <Tab.Screen name="Reorder" component={Home} options={{tabBarIcon: ({color, size})=>{
          return     <MaterialIcons name="reorder" color={color} size={size} />   
        }}} />

        <Tab.Screen name="Cart" component={Home} options={{tabBarIcon: ({color, size})=>{
          return <MaterialCommunityIcons name="cart" color={color} size={size} />
        }}} />

        <Tab.Screen name="Account" component={Home} options={{tabBarIcon: ({color, size}) =>{
          return <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
        }}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
