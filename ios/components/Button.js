import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';

//Touchable components are just buttons. 
const Button = ({ displayAlbumTitle }) => {
    //destructure buttonStyle from styles
    const { buttonStyle, textStyle } = styles;
    //TouchableOpacity is a button that changes the opacity when pressed
    //displayAlbumTitle is the function declared in the parent (AlbumDetails)
    //that we run in the onPress handler of Button
    return (
        <TouchableOpacity onPress={displayAlbumTitle} style={buttonStyle}>
            <Text style={textStyle}>
                Click Me!!!
            </Text>    
        </TouchableOpacity>
    );
};

//flex 1 means to expand to fill the container
//alignSelf stretch tell element to stretch to fill limits of the container
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;

