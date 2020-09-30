import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

import useFonts from '../assets/fonts/useFonts';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator 
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          height: 20,
          width: 20,
        },
        labelStyle: {
          fontFamily: useFonts.archivoBold,
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen 
        name="TeacherList"
        component={TeacherList} 
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            const colorIcon = focused ? '#8257e5' : color;
            return (
              <Ionicons name="ios-easel" color={colorIcon} size={size} />
            );
          }
        }}
      />
      <Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            const colorIcon = focused ? '#8257e5' : color;
            return (
              <Ionicons name="ios-heart" color={colorIcon} size={size} />
            );
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;