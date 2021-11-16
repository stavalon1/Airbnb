import React from 'react';
import {View,Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/post';

const SearchResultScreen = (props) => {

    
    return (
        <View>
           <FlatList 
            data={feed}
            renderItem={({item}) => <Post post={item}/>}
           />
        </View>
    );
};

export default SearchResultScreen; 