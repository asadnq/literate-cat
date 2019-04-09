import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductsDetail';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { View } from 'react-native'; 
import StackHeader from '../components/UI/headers/StackHeader';


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

        
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'book'; 
                } else if (routeName === 'Cart') {
                    iconName = 'shopping-cart';
                }
                    return <Icon type='FontAwesome' name={iconName} size={25} style={{color: tintColor}} />;
                },
                animationEnabled: true,
                swipeEnabled: true
            }),
            tabBarOptions: {
                swipeEnabled: true,
                showIcon: true,
                activeTintColor: '#006494',
                inactiveTintColor: '#AAA',
            },
    }
)
const MainStack = createStackNavigator(
    {
        Main: {
            screen: MainTab,
            navigationOptions: {
                header: StackHeader,
                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: 'Lato-Regular',
                    color: '#FFF',
                    textAlign: 'center',
                    flex: 1
                }
            },
            headerMode: 'none'
        },
        ProductDetail: {
            screen: ProductDetail
        },
        Payment: {
            screen: PaymentScreen
        },
        Products: {
            screen: ProductsScreen
        }
    },
    {
        initialRouteName: 'Main',
    }
);


const AppNavigator = createAppContainer(MainStack)


export default AppNavigator;
