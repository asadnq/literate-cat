import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Lato from '../components/UI/texts/Lato';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import { View } from 'react-native'; 

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
            screen: MainTab,
            navigationOptions: {
                title: 'Book Store',
                headerLeft: (<View></View>), 
                headerRight: (<View></View>),
                headerStyle: {
                    backgroundColor: '#006494'
                },
                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: 'Lato-Regular',
                    color: '#FFF',
                    textAlign: 'center',
                    flex: 1
                }
            }
        },
        ProductDetail: {
            screen: ProductDetail
        },
        Payment: {
            screen: PaymentScreen
        }
    },
    {
        initialRouteName: 'Main'
    }
);


const AppNavigator = createAppContainer(MainStack)


export default AppNavigator;
