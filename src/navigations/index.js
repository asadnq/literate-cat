import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Login from '../screens/Login';
import Register from '../screens/Register';
import AuthLoading from '../screens/AuthLoading';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { View } from 'react-native'; 
import StackHeader from '../components/UI/headers/StackHeader';

// //disable warning
// console.disableYellowBox = true;

const MainTab = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Cart: {
            screen: CartScreen
        },
        Settings: {
            screen: SettingsScreen
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'library-books'; 
                } else if (routeName === 'Cart') {
                    iconName = 'shopping-cart';
                } else if (routeName === 'Settings') {
                    iconName = 'tune';
                }
                    return <Icon type='MaterialIcons' name={iconName} size={25} style={{color: tintColor}} />;
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

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        }
    },
    {
        initialRouteName: 'Login'
    }
)

const MainSwitch = createSwitchNavigator(
    {
        AuthStack: {
            screen: AuthStack
        },
        MainStack: {
            screen: MainStack
        },
        AuthLoading: {
            screen: AuthLoading
        }
    },
    {
        initialRouteName: 'MainStack'
    }
)


const AppNavigator = createAppContainer(MainSwitch)


export default AppNavigator;
