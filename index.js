console.disableYellowBox = true;

import React  from 'React';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    console.log('in App.js -- render()');
    //set the header text 
    //return the main view which contains the Header and AlbumList
    return (
      //flex 1 tells it to expand to fill the entire area of the screen
      <View style={{ flex: 1 }}>
        <Header headerText={'Album List'} />
        <AlbumList />
      </View>    );
};

AppRegistry.registerComponent('albums', () => App);

