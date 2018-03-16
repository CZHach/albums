import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Child component of App.js

//https://rallycoding.herokuapp.com/api/music_albums
class AlbumList extends Component {
    //state is used for internal record keeping
    //only used in class based components
    //used to record and respond to user triggered events
    //initialize the state and albums
    state = { albums: [] };
    componentWillMount() {
        console.log('componentWillMount In AlbumList.');
        //make a get request to get JSON from remote URL
        //when the data finally is returned from the remote server,  
        //the state is set and by setting the state, 
        //the render method is triggered to re-render with the new data
        //the render method is called twice: 1. initial render, 2. when state is set
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        //map is an array helper
        //in this case, our fat-arrow function will be called 5 times(five albums in the array)
        //for each album, return a text tag that contains the album title
        //use curly braces when referencing a javascript variable inside jsx
        return this.state.albums.map(album =>
             <AlbumDetail key={album.title} album={album} />);
    }
    render() {
        console.log('in AlbumList --- render()');
        console.log(this.state);
        //use a ScrollView
        //everything in this view that renders all the content, needs to be scrollable
        return (
            <ScrollView> 
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
