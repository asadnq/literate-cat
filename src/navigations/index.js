import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';
import { Icon } from 'native-base';

const MainTab = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Cart: {
            screen: CartScreen
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') {
                iconName = 'home'; 
              } else if (routeName === 'Cart') {
                iconName = 'shopping-cart';
              }
                return <Icon type='FontAwesome' name={iconName} size={25} style={{color: tintColor}} />;
            },
          }),
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#006494',
            inactiveTintColor: '#AAA',
          }
    }
)
const MainStack = createStackNavigator(
    {
        Main: {
            screen: MainTab
        },
        ProductDetail: {
            screen: ProductDetail
        }
    },
    {
        initialRouteName: 'Main'
    }
);


const AppNavigator = createAppContainer(MainStack)


export default AppNavigator;
