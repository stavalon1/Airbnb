import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import PostScreen from '../screens/PostScreen';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();
const Router = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{headerShown: false,}} />
                <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen} />
                <Stack.Screen name={"Guests"} component={GuestsScreen} />
                <Stack.Screen name={"Post"} component={PostScreen} options={{ title: "Accomedtaion"}} />
            </Stack.Navigator>
        </NavigationContainer>      
    );
};

export default Router;