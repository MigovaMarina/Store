import React from 'react';
import { Route, StyleSheet, Text, View } from 'react-native';

import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import { COLORS } from '../constants/colors';
import { TEXT } from '../constants/text';
import { MaterialTopNavigatorScreenNames, MaterialTopNavigatorType } from '../types/navigation';

const Tab = createMaterialTopTabNavigator<MaterialTopNavigatorType>();

const MockScreen = () => <></>;

const getTabBarLabel = (isFocus: boolean, label: string) => {
  return (
    <View style={styles.tab}>
      <Text style={isFocus ? styles.activeLabel : styles.label}>{label}</Text>
      {isFocus && (
        <View style={styles.activeIndicator}/>
      )}
    </View>
  );
};

const getScreenOptions = ({ route }: { route: Route }):  MaterialTopTabNavigationOptions => ({
  animationEnabled: false,
  tabBarLabel: ({ focused }: { focused: boolean }) => (
    getTabBarLabel(focused, TEXT.materialTop[route.name as keyof typeof TEXT.materialTop])
  ),
  tabBarItemStyle: {
    width: 100,
  },
  tabBarIndicatorStyle: {
    backgroundColor: 'transparent',
  },
  tabBarPressColor: 'transparent',
  tabBarContentContainerStyle: {
    justifyContent: 'space-around',
    marginRight: 10,
  },
  tabBarStyle: {
    elevation: 0,
  },
});

export const MaterialTopNavigator = () => {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen name={MaterialTopNavigatorScreenNames.services} component={MockScreen} />
      <Tab.Screen name={MaterialTopNavigatorScreenNames.subscription} component={MockScreen} />
      <Tab.Screen name={MaterialTopNavigatorScreenNames.marketplace} component={MockScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    width: '120%',
    position: 'relative',
    left: -10,
  },
  activeLabel: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 14,
  },
  label: {
    fontSize: 12,
    lineHeight: 13,
    color: COLORS.wallStreet,
  },
  activeIndicator: {
    height: 3,
    width: '100%',
    marginTop: 5,
    borderRadius: 3,
    backgroundColor: COLORS.dark,
  },
});
