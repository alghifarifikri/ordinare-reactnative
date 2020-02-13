import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from '../screens/SplashScreen';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Details from '../screens/Details';
import Feed from '../screens/Feed';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MenuResto from '../screens/MenuResto';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Review from '../screens/Review';
import Search from '../screens/Search';

const SplashNav = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'SplashScreen',
})

const AuthNav = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Login',
})

const HomeNav = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        },
    },
    Search: {
        screen: Search,
        navigationOptions: {
            headerShown: false,
        },
    },
    MenuResto: {
        screen: MenuResto,
        navigationOptions: {
            headerShown: false,
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Home',
})

HomeNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const FeedNav = createStackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Feed',
})

const CartNav = createStackNavigator({
    Cart: {
        screen: Cart,
        navigationOptions: {
            headerShown: false,
        },
    },
    Checkout: {
        screen: Checkout,
        navigationOptions: {
            headerShown: false,
        },
    },
    Review: {
        screen: Review,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Cart',
})

CartNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const ProfileNav = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Profile',
})

const BottomNav = createBottomTabNavigator({
    Home: {
        screen: HomeNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="home-city-outline" size={25} color={tintColor} />;
            },
        },
    },
    Feed: {
        screen: FeedNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="newspaper" size={25} color={tintColor} />;
            },
        },
    },
    Cart: {
        screen: CartNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="cart" size={25} color={tintColor} />;
            },
        },
    },
    Profile: {
        screen: ProfileNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="account" size={25} color={tintColor} />;
            },
        },
    },
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'blue',
        inactiveTintColor: 'blue',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
        }
    }
})

const SwitchNav = createSwitchNavigator({
    SplashNav,
    AuthNav,
    BottomNav,
}, {
    initialRouteName: 'SplashNav',
})

const AppContainer = createAppContainer(SwitchNav)

// create a component
class Router extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

//make this component available to the app
export default Router;