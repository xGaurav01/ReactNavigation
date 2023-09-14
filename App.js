import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import DirectMessages from './src/screens/dm';
import { NavigationContainer } from '@react-navigation/native';
import Mention from './src/screens/mention';
import Search from './src/screens/search';
import You from './src/screens/you';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DrawerScreen from './src/navigations/drawer';
    
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

const BottomTab = createBottomTabNavigator();
const BottomTabNavigation =()=>{
  return (
    <BottomTab.Navigator >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'grey',
          },
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              color={focused ? 'black' : 'grey'}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="DM"
        component={DirectMessages}
        options={{
          tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'grey',
          },
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="message1"
              color={focused ? 'black' : 'grey'}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Mention"
        component={Mention}
        options={{
          tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'grey',
          },
          tabBarIcon: ({focused}) => (
            <Octicons
              name="mention"
              color={focused ? 'black' : 'grey'}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'grey',
          },
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="search1"
              color={focused ? 'black' : 'grey'}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="You"
        component={You}
        options={{
          tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'grey',
          },
          tabBarIcon: ({focused}) => (
            <Octicons
              name="person"
              color={focused ? 'black' : 'grey'}
              size={24}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
  
}

const TopTabNavigation =()=>{
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="You" component={You} />
      <TopTab.Screen name="Search" component={Search} />
      <TopTab.Screen name="DirectMessages" component={DirectMessages} />
    </TopTab.Navigator>
  );
}
const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Draft & Sent" component={TopTabNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App
