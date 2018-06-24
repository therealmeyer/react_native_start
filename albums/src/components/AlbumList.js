import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }


  componentWillMount() {

    axios.get('https://sonic-stratus.herokuapp.com/api/tracks')
      .then(response => this.setState({ albums: Object.keys(response.data).map(id => response.data[id]) }));
    // -- OR -- 
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => response.json())
    //   .then(response => console.log(response));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render () {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
