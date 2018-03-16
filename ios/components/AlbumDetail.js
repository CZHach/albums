import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//Child component of AlbumList

//should this be a class based or functional component?
//functional -- This is a presentational component, does not need access to state
//Pass <Text>{props.album.title}</Text> to the CardSection component and
//the CardSection component to the Card component


const AlbumDetail = ({ album }) => {
    //destructure props object in the code block so that we don't have to use
    //props.album for everything(like props.album.title, props.album.artist, etc)
    const { title, artist, thumbnail_image, image } = album;

    //also, destructure the styles object to make the code cleaner
    const { 
        headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle
     } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                 style={imageStyle}
                 source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                {/* pass an displayAlbumTitle function as a prop to the Button component so that 
                the Button component is as generic as possible */}
                <Button displayAlbumTitle={() => console.log(title)} />
            </CardSection>
        </Card>
    );
};

//styling to position the elements above
//flexDirection column tells flexbox to work top to bottom
//justifyContent space-around tells flexbox to layout the elements
//with equal space between them.
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    }, 
    //need to explicity set height and width so that images shows
    thumbnailStyle: {
        height: 50,
        width: 50
    },

    //trick to get the image to fill up the entire width
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;

