import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { Icon } from 'native-base';

import Login from '../screens/Login/Login.container';
import Register from '../screens/Register/Register.container';
import AuthLoading from '../screens/AuthLoading/AuthLoading.screen';
import BooksScreen from '../screens/Books/Books.container';
import BooksDetail from '../screens/BooksDetail/BooksDetail.container';
import CartScreen from '../screens/Cart/Cart.container';
import CheckoutScreen from '../screens/Checkout/Checkout.container';
import SettingsScreen from '../screens/Settings/Settings.container';
import BooksFilter from '../screens/BooksFilter/BooksFilter.container'; 

const MainTab = createBottomTabNavigator(
  {
    Books: {
      screen: BooksScreen
    },
    Cart: {
      screen: CartScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: 'Books',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Books') {
          iconName = 'library-books';
        } else if (routeName === 'Cart') {
          iconName = 'shopping-cart';
        } else if (routeName === 'Settings') {
          iconName = 'tune';
        }
        return (
          <Icon
            type="MaterialIcons"
            name={iconName}
            size={25}
            style={{ color: tintColor }}
          />
        );
      },
      animationEnabled: true,
      swipeEnabled: true
    }),
    tabBarOptions: {
      swipeEnabled: true,
      showIcon: true,
      activeTintColor: '#006494',
      inactiveTintColor: '#AAA'
    }
  }
);
const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainTab,
      navigationOptions: {
        header: null
      }
    },
    BooksDetail: {
      screen: BooksDetail
    },
    Checkout: {
      screen: CheckoutScreen
    },
    BooksFilter: {
      screen: BooksFilter
    }
  },
  {
    initialRouteName: 'Main'
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    AuthLoading: {
      screen: AuthLoading
    }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

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
    initialRouteName: 'AuthLoading'
  }
);

const AppNavigator = createAppContainer(MainSwitch);

export default AppNavigator;
