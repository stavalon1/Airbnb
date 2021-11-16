import React from 'react';
import {View,Text, FlatList} from 'react-native';
import DetailsPost from '../../components/DetailsPost';
import {useRoute} from '@react-navigation/native';
import places from '../../../assets/data/feed';

const post = places[0];

const PostScreen = (props) => { 
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

    return (
        <View style={{backgroundColor: '#fff'}}>
          <DetailsPost post={post} />
        </View>
    );
};

export default PostScreen; 