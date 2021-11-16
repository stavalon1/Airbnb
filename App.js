/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import  {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import feed from './assets/data/feed';
import SearchResultScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import Router from './src/navigation/Router';

const post1 = feed[0];
const post2 = feed[2];

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
     
      <Router/>
    </>
   
  );
};

export default App;
