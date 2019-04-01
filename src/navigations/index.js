import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        ProductDetail: {
            screen: ProductDetail
        }
    },
    {
        initialRouteName: 'Home'
    }
);

const AppNavigator = createAppContainer(MainStack)


export default AppNavigator;
