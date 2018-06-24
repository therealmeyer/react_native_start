import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, user, album_url } = album;
  const { thumbnailContainerStyle, 
    thumbnailStyle, 
    headerContentStyle, 
    titleTextStyle, 
    imageStyle} = styles;
  
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: album_url}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{user}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: album_url }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL('https://odesza.com/')}>
          Website
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  titleTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 350,
    flex: 1,
    width: null
  }

};


export default AlbumDetail;