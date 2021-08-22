import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Image
} from 'react-native';
import Home from '../../containers/Home/Home';
import DonationHome from '../../containers/donationScreens/DonationHome';
import donationb from '../../assets/image/donationb.png'
import donationgray from '../../assets/image/donategray.png'
import homeBlue from '../../assets/image/home.png'
import homewhite from '../../assets/image/homewhite.png'
import DonationForm from '../../containers/donationScreens/DonationForm'
import DonationResult from '../../containers/donationScreens/DonationResult'
import DrawerContent from '../../containers/drawerScreens/DrawerScreen'
import Aboutus from '../../containers/drawerScreens/About'
import Services from '../../containers/drawerScreens/Services'
import Bankdetail from '../../containers/drawerScreens/bankdetail'
import NetworkBranch from '../../containers/drawerScreens/NetworkBranch';
import Linkings from '../../components/linkingLink';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

function DonationNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DonationHome" component={DonationHome} />
            <Stack.Screen name="DonationForm" component={DonationForm} options={() => ({
                gestureEnabled: true
            })} />
            <Stack.Screen name="DonationResult" component={DonationResult} />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Donation"
            screenOptions={(options) => {
                const route = options.route;
                return {
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Donation') {
                            return iconName = focused
                                ?
                                <Image source={donationb} style={{ height: 60, width: 60, marginBottom: 5 }} />
                                :
                                <Image source={donationgray} style={{ height: 33, width: 33, marginBottom: -2 }} />
                        }
                        else if (route.name === 'Home') {
                            return iconName = focused
                                ?
                                <Image source={homeBlue} style={{ height: 28, width: 28 }} />
                                :
                                <Image source={homewhite} style={{ height: 28, width: 28 }} />
                        }
                        return null
                    }
                }
            }}
            tabBarOptions={{

                showLabel: false,
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen name="Donation" component={DonationNav}
            >
            </Tab.Screen>
            <Tab.Screen name="Home" component={Home}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

function DrawerBar() {
    return (

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Aboutus" component={Aboutus} />
            <Drawer.Screen name="Services" component={Services} />
            <Drawer.Screen name="NetworkBranch" component={NetworkBranch} />
            <Drawer.Screen name="Bankdetail" component={Bankdetail} />
        </Drawer.Navigator>
    );
}

function MainNavi() {
    return (
        <NavigationContainer linking={Linkings}>
            <DrawerBar />
        </NavigationContainer>
    );
};


export default MainNavi;