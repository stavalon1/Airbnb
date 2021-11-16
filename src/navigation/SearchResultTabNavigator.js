import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/SearchResult';
import SearchResultsMap from '../screens/SearchResultsMap';
const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {

    return (
        <Tab.Navigator tabBarOptions= {{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroudColor: '#f15454',
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResult} />
             <Tab.Screen name={'map'} component={SearchResultsMap} />
        </Tab.Navigator>
    );
};

export default SearchResultTabNavigator;